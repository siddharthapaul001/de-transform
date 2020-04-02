# De-Transform
A javascript module to calculate original coordinates relative to a DOM element when CSS transforms are applied on it or it's parent elements. First JavasScript module to deal with CSS 2D and 3D transformations.

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
DeTransform.applyTransformAtPoint({ x: 0, y: 0 }, "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)", { x: 30, y: 30 });
>> {x: 60, y: -3.552713678800501e-15} // Output coordinate (60, 0)

// Applying CSS 3D transformation
// equivalant matrix3D form of transform: "perspective(1000px) rotateX(45deg) rotate(45deg)"
DeTransform.applyTransformAtPoint({ x: 0, y: 0 }, "matrix3d(0.707107, 0.5, 0.5, -0.0005, -0.707107, 0.5, 0.5, -0.0005, 0, -0.707107, 0.707107, -0.000707107, 0, 0, 0, 1)", { x: 30, y: 30 });
>> {x: 30, y: 0.16679391373199692, z: -28.4592395412566, w: 1.029292893} // Output coordinate (30, 0, -28)
```
