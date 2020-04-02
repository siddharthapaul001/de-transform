# De-Transform
JavasScript module to deal with CSS 2D and 3D transformations. This module mathematically calculates new coordinate after applying CSS transform on a point and helps to get original event coordinates relative to a DOM element when CSS transforms (both 2D, 3D) are applied on it or it's parent elements.

## Usage

### applyTransformAtPoint
Mathematically apply CSS matrix / matrix3d transform on a given point and returns new coordinates of the point after applying transformation on the point

#### Input Arguments
```
point: { Object } required // given point transformation will be applied on it
  {
    x: { Number } required,
    y: { Number } required,
    z: { Number } required for 3d transformation only
  }
,
matrix: { String } required // CSS 2D / 3D transformation Matrix
,
origin: { Object } required // transformation will be applied on the given point from the origin
  {
    x: { Number } required,
    y: { Number } required,
    z: { Number } optional // usefull for 3d transformation
  }
```

#### Example
```javascript
// Applying CSS 2D transformation
// 
DeTransform.applyTransformAtPoint(
  { x: 0, y: 0 },
  "matrix(6.12323e-17, 1, -1,6.12323e-17, 0, 0)",
  { x: 30, y: 30 });
>> {x: 60, y: -3.552713678800501e-15} // Output coordinate (60, 0)

// Applying CSS 3D transformation
// equivalant matrix3D form of transform: "perspective(1000px) rotateX(45deg) rotate(45deg)"
DeTransform.applyTransformAtPoint(
  { x: 0, y: 0 }, 
  "matrix3d(0.707107, 0.5, 0.5, -0.0005, -0.707107, 0.5, 0.5, -0.0005, 0, -0.707107, 0.707107, -0.000707107, 0, 0, 0, 1)",
  { x: 30, y: 30 }
);
>> {x: 30, y: 0.16679391373199692, z: -28.4592395412566, w: 1.029292893} // Output coordinate (30, 0, -28)
```

### getOriCoordinate
Takes HTML element and MouseEvent and returns the original (nullifying the css 2D / 3D transforms) event coordinates relative to the given HTML element.

#### Input Arguments
```
element: { HTMLElement } required
event: { MouseEvent } required
useOffset: { Boolean } optional // Default is false
```
##### What useOffset does ???
This module basically solves the problem in two ways
###### 1st (useOffset = false)
It travarse the DOM tree from the provided element to BODY and create a list of elements on which transforms are applied and stores their transformation matrices and transformation-origin.
Then it mathematically nullifies (inverse the transformation matrix and apply it on the new coordinate with the transformation origin) the transforms applied on the DOM elements (top to bottom hierarchically).
###### 2nd (useOffset = true)
MouseEvent interface has two properties named [offsetX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX) and [offsetY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetY) provides the offset coordinate of the mouse pointer between that event and the padding edge of the target node.
In this method `offsetX`, `offsetY` and `event.target || event.srcElement` are parsed from the event the offset distance between the provided element and target element is calculated. Then the offsetDistance is added to the coordinate (offsetX, offsetY).
###### Which method is to choose ???
Definately the 2nd method looks efficient and very easy to understand. But MouseEvent.offsetX and MouseEvent.offsetY are experimental features and they doesn't return accurate values when 3D transform is applied on a HTML element on Firefox which leads to incorrect outputs. On webkit based browsers (eg. Chrome, Safari etc.) 2nd method works well.

But the 1st method is implemented to extend support all browsers which support CSS transform (IE9+). This method works well when css 2d transformation is applied on multiple parent elements in the same hierarchically of provided element but it supports to have only one css 3D transformation on any of it's parent element (this will be fixed soon).

So it is prefered to use useOffset = false when you need crossbrowser support.

#### Example

```HTML
...
<script src="detransform.min.js"></script>
...
<div style="text-align:center; transform: rotate(180deg)">
  <div id="elem" style="display:inline-block; width: 200; height: 100;background-color:#ff0000">
    <span>Click on it</span>
  </div>
</div>
...
<script>
  (function(){
    document.getElementById("elem").addEventListener('click', function(evt){
      console.log(DeTransform.getOriCoordinate(this, evt)); // If you click on the top-left (understand the real top left corner by the text position and flow) corner of the red div it will return (0, 0)
    });
  })();
</script>
```

### getOriDragDistance
Takes HTML element and MouseEvent and returns the correct drag distance (dx and dy). Here the HTML element is required as under the hood it calculates the original event coordinates relative to the given HTML element using the getOriCoordinate in order to calculate the drag distance.
