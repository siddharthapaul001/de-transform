import { inverse, parseCoefficients } from './matrix';

const doc = document;
let __dragConfig = {}, UNDEF;

function filterEvent (event) {
  let e = event && (event.sourceEvent || event.originalEvent || event);
  return (e && ((e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]))) || e || { pageX: 0, pageY : 0 };
}

// todo: need improvement if transform applied on a scrollable body. pageX, pageY
function parseEventCoordinates (event) {
    let x = event.pageX || event.clientX + doc.scrollLeft + doc.body.scrollLeft,
    y = event.pageY || event.clientY + doc.scrollTop + doc.body.scrollTop;
    
    return {
        x,
        y
    };
}


function applyTransform (point, origin, mat) {
  let { x, y, z } = point, { oriX, oriY } = origin, oriZ = origin.oriZ || 0, newW;
  x = x - oriX;
  y = y - oriY;
  z = z - oriZ;
  if (mat.length === 6) {
    return {
      x: (mat[0] * x + mat[1] * y + mat[2]) + oriX,
      y: (mat[3] * x + mat[4] * y + mat[5]) + oriY
    };
  } else if (mat.length === 16) {
    newW = (mat[12] * x + mat[13] * y + mat[14] * z + mat[15]);
    return {
      x: (mat[0] * x + mat[1] * y + mat[2] * z + mat[3]) / newW + oriX,
      y: (mat[4] * x + mat[5] * y + mat[6] * z + mat[7]) / newW + oriY,
      z: (mat[8] * x + mat[9] * y + mat[10] * z + mat[11]) / newW + oriZ,
      w: newW
    };
  }
}


// alternate easy method
// Note: not reliable for 3d transformation on firefox or other browsers
// as this calucation relies on event.offsetX and event.offsetY which is experimental event attributes as per mdn
function getOriCoordinateByOffsets (element, event) {
  let x = event.offsetX, y = event.offsetY, dx = 0, dy = 0, tempEl, left, top;
  if (element !== (event.target || event.srcElement)) {
    dx = 0; dy = 0; tempEl = (event.target || event.srcElement);
    do {
      dx += tempEl.offsetLeft;
      dy += tempEl.offsetTop;
      tempEl = tempEl.offsetParent;
    } while (tempEl);
    tempEl = element;
    do {
      dx -= tempEl.offsetLeft;
      dy -= tempEl.offsetTop;
      tempEl = tempEl.offsetParent;
    } while (tempEl);
  }

  x += dx;
  y += dy;

  return {
    x, y
  };
}

function _getOffsetBBox (element) {
  let left = 0, top = 0, tempEl = element;
  
  do {
    left += tempEl.offsetLeft;
    top += tempEl.offsetTop;
    tempEl = tempEl.offsetParent;
  } while (tempEl);
  
  return {
    left, top,
    right: left + element.offsetWidth,
    bottom: top + element.offsetHeight
  };
}

function getOriCoordinate(element, event, useOffset = false) {
  let { x, y } = parseEventCoordinates(filterEvent(event)), cs, ori, mat, el = element, elList = [], left = 0, top = 0, temp, tempEl, oriX, oriY, scrollTop = 0, scrollLeft = 0,
  _bBox = _getOffsetBBox(element), coords = [
    { x: _bBox.left, y: _bBox.top, z: 1 },
    { x: _bBox.right, y: _bBox.top, z: 1 },
    { x: _bBox.right, y: _bBox.bottom, z: 1 },
    { x: _bBox.left, y: _bBox.bottom, z: 1 }], tempBBox;

  // Note: This is a easier way to solve the problem.
  // but it is not a reliable way as event.offsetX is experimental attribute
  // which doesn't return accurate values for firefox (seen in 3d transform with perspective) and some browsers
  if (useOffset && (event.offsetX !== UNDEF)) {
    return getOriCoordinateByOffsets(element, event);
  }

  do {
    cs = window.getComputedStyle(el);
    if (el.tagName !== 'BODY' && cs.getPropertyValue('overflow') === 'auto' || cs.getPropertyValue('overflow') === 'scroll') {
      if (el.scrollHeight > el.offsetHeight) {
        scrollTop += el.scrollTop;
      }
      if (el.scrollHeight > el.offsetHeight) {
        scrollLeft += el.scrollLeft;
      }
    }
    if (cs.getPropertyValue('transform') && cs.getPropertyValue('transform') !== 'none') {
      ori = cs.getPropertyValue('transform-origin').split(' ').map(e => +e.replace(/px/ig, ''));
      oriX = ori[0]; oriY = ori[1];
      mat = cs.getPropertyValue('transform').split('(')[1].split(')')[0].split(',').map(e => parseFloat(e.trim()));
      if (mat.length === 6) {
        // 2d transformation matrix
        let [a, b, c, d, e, f] = mat,
        matrix = [
          a, c, e,
          b, d, f];

        tempBBox = _getOffsetBBox(el);
        left = tempBBox.left; top = tempBBox.top;

        let bx1 = applyTransform({ x: coords[0].x - left, y: coords[0].y - top }, { oriX: ori[0], oriY: ori[1] }, matrix),
        bx2 = applyTransform({ x: coords[1].x - left, y: coords[1].y - top }, { oriX: ori[0], oriY: ori[1] }, matrix),
        bx3 = applyTransform({ x: coords[2].x - left, y: coords[2].y - top }, { oriX: ori[0], oriY: ori[1] }, matrix),
        bx4 = applyTransform({ x: coords[3].x - left, y: coords[3].y - top }, { oriX: ori[0], oriY: ori[1] }, matrix);

        coords[0].x = bx1.x + left; coords[0].y = bx1.y + top;
        coords[1].x = bx2.x + left; coords[1].y = bx2.y + top;
        coords[2].x = bx3.x + left; coords[2].y = bx3.y + top;
        coords[3].x = bx4.x + left; coords[3].y = bx4.y + top;

        elList.push({
          elem: el,
          oriX,
          oriY,
          invM: inverse(matrix),
          matrix,
          offsetLeft: left,
          offsetTop: top
        });
      } else if (mat.length === 16) {
        let [
          a1, b1, c1, d1,
          a2, b2, c2, d2,
          a3, b3, c3, d3,
          a4, b4, c4, d4
        ] = mat, matrix = [
          a1, a2, a3, a4,
          b1, b2, b3, b4,
          c1, c2, c3, c4,
          d1, d2, d3, d4
        ];
        
        tempBBox = _getOffsetBBox(el);
        left = tempBBox.left; top = tempBBox.top;

        let bx1 = applyTransform({ x: coords[0].x - left, y: coords[0].y - top, z: coords[0].z }, { oriX: ori[0], oriY: ori[1] }, matrix),
        bx2 = applyTransform({ x: coords[1].x - left, y: coords[1].y - top, z: coords[1].z }, { oriX: ori[0], oriY: ori[1] }, matrix),
        bx3 = applyTransform({ x: coords[2].x - left, y: coords[2].y - top, z: coords[2].z }, { oriX: ori[0], oriY: ori[1] }, matrix),
        bx4 = applyTransform({ x: coords[3].x - left, y: coords[3].y - top, z: coords[3].z }, { oriX: ori[0], oriY: ori[1] }, matrix);

        coords[0].x = bx1.x + left; coords[0].y = bx1.y + top;  coords[0].z = bx1.z;
        coords[1].x = bx2.x + left; coords[1].y = bx2.y + top;  coords[1].z = bx2.z;
        coords[2].x = bx3.x + left; coords[2].y = bx3.y + top;  coords[2].z = bx3.z;
        coords[3].x = bx4.x + left; coords[3].y = bx4.y + top;  coords[3].z = bx4.z;

        elList.push({
          elem: el,
          oriX,
          oriY,
          matrix,
          offsetLeft: left,
          offsetTop: top,
          offsetHeight: el.offsetHeight,
          offsetWidth: el.offsetWidth
        });
      }
    }
    el = el.parentElement;
  } while (el);

  x += scrollLeft;
  y += scrollTop;

  left = _bBox.left; top = _bBox.top;

  // calculate z' at mouse coordinate (x', y')
  let { A, B, C } = parseCoefficients(inverse([
    coords[0].x, coords[0].y, 1,
    coords[1].x, coords[1].y, 1,
    coords[2].x, coords[2].y, 1
  ]), [coords[0].z, coords[1].z, coords[2].z]), z;
  z = A * x + B * y + C;

  while((el = elList.pop())) {
    if (el.matrix.length === 16) {
      // 3d transformation applied
      tempEl = el;
      x = x - tempEl.offsetLeft;
      y = y - tempEl.offsetTop;
      temp = applyTransform({ x, y, z }, { oriX: ori[0], oriY: ori[1] }, inverse(tempEl.matrix));
      x = temp.x + tempEl.offsetLeft;
      y = temp.y + tempEl.offsetTop;
      z = temp.z;
    } else if (el.matrix.length === 6) {
      // 2d transform applied
      x = x - el.offsetLeft;
      y = y - el.offsetTop;
      temp = applyTransform({ x, y }, { oriX: el.oriX, oriY: el.oriY }, el.invM);
      x = temp.x + el.offsetLeft;
      y = temp.y + el.offsetTop;
    }
  }
  x -= left;
  y -= top;
  return {
    x, y
  };
  
}

// todo: remove argument state. parse state from event.
function getOriDragDistance (element, event, state, useOffset = false) {
  let oriCoord = getOriCoordinate(element, event, useOffset),
    dx = 0, dy = 0,
    { x, y } = parseEventCoordinates(filterEvent(event)), config = __dragConfig;

  if (oriCoord) {
    x = oriCoord.x;
    y = oriCoord.y;
  }

  if (state === 'start') {
    config._dragOX = x;
    config._dragOY = y;
  } else if (state === 'end') {
    dx = x - config._dragOX;
    dy = y - config._dragOY;
    delete config._dragOX;
    delete config._dragOY;
  } else {
    dx = x - config._dragOX;
    dy = y - config._dragOY;
  }
  return {
    dx,
    dy
  };
}

// todo: extend support for all css 2d and 3d transform strings
function applyTransformAtPoint(point, cssMatrixStr, origin) {
  let mat = cssMatrixStr.slice(0, 6).toLowerCase() === 'matrix' && cssMatrixStr.split('(')[1].split(')')[0].split(',').map(e => parseFloat(e.trim()));
  if (mat.length === 6) {
    // 2d transformation matrix
    let [
      a, b, c,
      d, e, f
    ] = mat;
    mat = [
      a, c, e,
      b, d, f
    ];
  } else if (mat.length === 16) {
    // 3d transformation matrix
    let [
      a1, b1, c1, d1,
      a2, b2, c2, d2,
      a3, b3, c3, d3,
      a4, b4, c4, d4
    ] = mat;
    mat = [
      a1, a2, a3, a4,
      b1, b2, b3, b4,
      c1, c2, c3, c4,
      d1, d2, d3, d4
    ];
  }
  return applyTransform(point, {oriX: origin.x, oriY: origin.y, oriZ: origin.z || 0}, mat);
}

export {
    getOriCoordinate,
    getOriDragDistance,
    applyTransformAtPoint
}