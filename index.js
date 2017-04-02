/***
  wresenham - implementation of bresenham based line with thickness
  by Michael Strassburger <codepoet@cpan.org>
***/
const bresenham = require('bresenham');

module.exports = (from, to, width, callback) => {
  // Fall back to original bresenham algorihm in case we got a too thin line
  if (width < 1) {
    return bresehmham(from[0], from[1], to[0], to[1], callback);
  }

  let x0 = from[0], y0 = from[1],
      x1 = to[0], y1 = to[1],
      deltaX = Math.abs(x1-x0),
      stepX = x0 < x1 ? 1 : -1,
      deltaY = Math.abs(y1-y0),
      stepY = y0 < y1 ? 1 : -1,
      err = deltaX-deltaY,
      ed = deltaX+deltaY === 0 ? 1 : Math.sqrt(deltaX*deltaX+deltaY*deltaY),
      e2, x2, y2;

//  width = (width+1)/2;

  while(true) {
    callback(x0, y0);
    e2 = err,
    x2 = x0;

    // loop over all horizontal parts
    if (2*e2 >= -deltaX) {
      e2 += deltaY;
      y2 = y0;
      while (e2 < ed*width && (y1 != y2 || deltaX > deltaY)) {
        callback(x0, y2 += stepY);
        e2 += deltaX;
      }
      if (x0 === x1) {
        break;
      }
      e2 = err;
      err -= deltaY;
      x0 += stepX;
    }

    // loop over all vertical parts
    if (2*e2 <= deltaY) {
      e2 = deltaX-e2;
      while (e2 < ed*width && (x1 != x2 || deltaX < deltaY)) {
        callback(x2 += stepX, y0);
        e2 += deltaY;
      }
      if (y0 === y1) {
        break;
      }
      err += deltaX;
      y0 += stepY;
    }
  }
};
