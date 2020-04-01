import { inverse, parseCoefficients, applyTransform } from './matrix';

const doc = document;
let __dragConfig = {};

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
function getOriCoordinate(element, event) {
  let { x, y } = parseEventCoordinates(filterEvent(event)), cs, ori, mat, el = element, elList = [], left = 0, top = 0, temp, tempEl, oriX, oriY, hasTransform = false, is3DTransform = false, scrollTop = 0, scrollLeft = 0;

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
        // 2d transformation matrix otherwise ignore
        left = 0; top = 0; tempEl = el;
        do {
          left += tempEl.offsetLeft;
          top += tempEl.offsetTop;
          tempEl = tempEl.offsetParent;
        } while (tempEl);

        elList.push({
          elem: el,
          oriX,
          oriY,
          invM: inverse(mat),
          offsetLeft: left,
          offsetTop: top
        });
        hasTransform = true;
      } else if (mat.length === 16) {
        is3DTransform = true;
        hasTransform = true;
        let [
          a1, b1, c1, d1,
          a2, b2, c2, d2,
          a3, b3, c3, d3,
          a4, b4, c4, d4
        ] = mat;
        left = 0; top = 0; tempEl = el;
        do {
          left += tempEl.offsetLeft;
          top += tempEl.offsetTop;
          tempEl = tempEl.offsetParent;
        } while (tempEl);

        elList.push({
          elem: el,
          oriX,
          oriY,
          matrix: [
            a1, a2, a3, a4,
            b1, b2, b3, b4,
            c1, c2, c3, c4,
            d1, d2, d3, d4
          ],
          offsetLeft: left,
          offsetTop: top
        });
      }
    }
    el = el.parentElement;
  } while (el);

  x += scrollLeft;
  y += scrollTop;

  // calculate for target element (span)
  left = 0; top = 0; tempEl = element;
  do {
    left += tempEl.offsetLeft;
    top += tempEl.offsetTop;
    tempEl = tempEl.offsetParent;
  } while (tempEl);

  if (is3DTransform) {
    // 3d transform applied will solve only 1 element
    tempEl = elList[0];
    let chartBBox = { x1: left - tempEl.offsetLeft, y1: top - tempEl.offsetTop, x2: left + element.offsetWidth - tempEl.offsetLeft, y2: top + element.offsetHeight - tempEl.offsetTop },
      bx1 = applyTransform({ x: chartBBox.x1, y: chartBBox.y1, z: 1 }, { oriX: ori[0], oriY: ori[1] }, tempEl.matrix),
      bx2 = applyTransform({ x: chartBBox.x2, y: chartBBox.y1, z: 1 }, { oriX: ori[0], oriY: ori[1] }, tempEl.matrix),
      bx3 = applyTransform({ x: chartBBox.x2, y: chartBBox.y2, z: 1 }, { oriX: ori[0], oriY: ori[1] }, tempEl.matrix),
      // bx4 = applyTransform({ x: chartBBox.x1, y: chartBBox.y2, z: 1 }, { oriX: ori[0], oriY: ori[1] }, tempEl.matrix),
      { A, B, C } = parseCoefficients(inverse([
        bx1.x, bx1.y, 1,
        bx2.x, bx2.y, 1,
        bx3.x, bx3.y, 1
      ]), [bx1.z, bx2.z, bx3.z]), z;
    x = x - tempEl.offsetLeft;
    y = y - tempEl.offsetTop;
    z = A * x + B * y + C;
    temp = applyTransform({ x, y, z }, { oriX: ori[0], oriY: ori[1] }, inverse(tempEl.matrix));
    x = temp.x - chartBBox.x1;
    y = temp.y - chartBBox.y1;
    z = temp.z;
    return {
      x, y
    };
  }
  // 2d transform applid
  while ((el = elList.pop())) {
    x = x - el.offsetLeft;
    y = y - el.offsetTop;
    temp = applyTransform({ x, y }, { oriX: el.oriX, oriY: el.oriY }, el.invM);
    x = temp.x + el.offsetLeft;
    y = temp.y + el.offsetTop;
  }

  if (hasTransform) {
    x -= left;
    y -= top;
    return {
      x, y
    };
  }
}

// todo: remove argument state. parse state from event.
function getOriDragDistance (element, event, state) {
  let oriCoord = getOriCoordinate(element, event),
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

export {
    getOriCoordinate,
    getOriDragDistance
}