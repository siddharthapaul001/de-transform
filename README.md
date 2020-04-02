# De-Transform
A javascript module to calculate original coordinates relative to a DOM element when CSS transforms are applied on it or it's parent elements. First JavasScript module to deal with CSS 2D and 3D transformations.

## Usage

### applyTransformAtPoint
Mathematically apply CSS matrix / matrix3d transform on a given point and returns new coordinates of the point after applying transformation on the point

#### Input Arguments
```javascript
point: {Object} required // given point transformation will be applied on it
  {
    x: {Number} required,
    y: {Number} required,
    z: {Number} optional // usefull for 3d transformation
  }
,
matrix: {String} required // CSS 2D / 3D transformation Matrix
,
origin: {Object} required // transformation will be applied on the given point from the origin
  {
    x: {Number} required,
    y: {Number} required,
    z: {Number} optional // usefull for 3d transformation
  }
```


#### Example
```javascript
// css 2D transformation matrix
DeTransform.applyTransformationAtPoint({ x: 0, y: 0 }, "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)", {});
```
