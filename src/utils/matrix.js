function parseCoefficients (XY, Z) {
  return {
    A: XY[0] * Z[0] + XY[1] * Z[1] + XY[2] * Z[2],
    B: XY[3] * Z[0] + XY[4] * Z[1] + XY[5] * Z[2],
    C: XY[6] * Z[0] + XY[7] * Z[1] + XY[8] * Z[2]
  };
}

function inverse (mat) {
  let det;
  if (mat.length === 6) {
    let [a, c, e, b, d, f] = mat;
    det = a * d - b * c;
    return [
      d / det, -c / det, (c * f - e * d) / det,
      -b / det, a / det, -(a * f - e * b) / det
    ];
  } else if (mat.length === 9) {
    let [
      a, b, c,
      d, e, f,
      g, h, i
    ] = mat;
    det = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);

    return [
      (e * i - f * h) / det, (c * h - b * i) / det, (b * f - c * e) / det,
      (f * g - d * i) / det, (a * i - c * g) / det, (c * d - a * f) / det,
      (d * h - e * g) / det, (b * g - a * h) / det, (a * e - b * d) / det
    ];
  } else if (mat.length === 16) {
    let [
        a1, b1, c1, d1,
        a2, b2, c2, d2,
        a3, b3, c3, d3,
        a4, b4, c4, d4
      ] = mat, invM = [];
    invM[0] = b2 * c3 * d4 -
        b2 * d3 * c4 -
        b3 * c2 * d4 +
        b3 * d2 * c4 +
        b4 * c2 * d3 -
        b4 * d2 * c3;

    invM[1] = -b1 * c3 * d4 +
        b1 * d3 * c4 +
        b3 * c1 * d4 -
        b3 * d1 * c4 -
        b4 * c1 * d3 +
        b4 * d1 * c3;

    invM[2] = b1 * c2 * d4 -
        b1 * d2 * c4 -
        b2 * c1 * d4 +
        b2 * d1 * c4 +
        b4 * c1 * d2 -
        b4 * d1 * c2;

    invM[3] = -b1 * c2 * d3 +
        b1 * d2 * c3 +
        b2 * c1 * d3 -
        b2 * d1 * c3 -
        b3 * c1 * d2 +
        b3 * d1 * c2;

    invM[4] = -a2 * c3 * d4 +
        a2 * d3 * c4 +
        a3 * c2 * d4 -
        a3 * d2 * c4 -
        a4 * c2 * d3 +
        a4 * d2 * c3;

    invM[5] = a1 * c3 * d4 -
        a1 * d3 * c4 -
        a3 * c1 * d4 +
        a3 * d1 * c4 +
        a4 * c1 * d3 -
        a4 * d1 * c3;

    invM[6] = -a1 * c2 * d4 +
        a1 * d2 * c4 +
        a2 * c1 * d4 -
        a2 * d1 * c4 -
        a4 * c1 * d2 +
        a4 * d1 * c2;

    invM[7] = a1 * c2 * d3 -
        a1 * d2 * c3 -
        a2 * c1 * d3 +
        a2 * d1 * c3 +
        a3 * c1 * d2 -
        a3 * d1 * c2;

    invM[8] = a2 * b3 * d4 -
        a2 * d3 * b4 -
        a3 * b2 * d4 +
        a3 * d2 * b4 +
        a4 * b2 * d3 -
        a4 * d2 * b3;

    invM[9] = -a1 * b3 * d4 +
        a1 * d3 * b4 +
        a3 * b1 * d4 -
        a3 * d1 * b4 -
        a4 * b1 * d3 +
        a4 * d1 * b3;

    invM[10] = a1 * b2 * d4 -
        a1 * d2 * b4 -
        a2 * b1 * d4 +
        a2 * d1 * b4 +
        a4 * b1 * d2 -
        a4 * d1 * b2;

    invM[11] = -a1 * b2 * d3 +
        a1 * d2 * b3 +
        a2 * b1 * d3 -
        a2 * d1 * b3 -
        a3 * b1 * d2 +
        a3 * d1 * b2;

    invM[12] = -a2 * b3 * c4 +
        a2 * c3 * b4 +
        a3 * b2 * c4 -
        a3 * c2 * b4 -
        a4 * b2 * c3 +
        a4 * c2 * b3;

    invM[13] = a1 * b3 * c4 -
        a1 * c3 * b4 -
        a3 * b1 * c4 +
        a3 * c1 * b4 +
        a4 * b1 * c3 -
        a4 * c1 * b3;

    invM[14] = -a1 * b2 * c4 +
        a1 * c2 * b4 +
        a2 * b1 * c4 -
        a2 * c1 * b4 -
        a4 * b1 * c2 +
        a4 * c1 * b2;

    invM[15] = a1 * b2 * c3 -
        a1 * c2 * b3 -
        a2 * b1 * c3 +
        a2 * c1 * b3 +
        a3 * b1 * c2 -
        a3 * c1 * b2;

    det = a1 * invM[0] + b1 * invM[4] + c1 * invM[8] + d1 * invM[12];
    return [
      invM[0] / det, invM[1] / det, invM[2] / det, invM[3] / det,
      invM[4] / det, invM[5] / det, invM[6] / det, invM[7] / det,
      invM[8] / det, invM[9] / det, invM[10] / det, invM[11] / det,
      invM[12] / det, invM[13] / det, invM[14] / det, invM[15] / det
    ];
  }
}

export {
    parseCoefficients,
    inverse
};