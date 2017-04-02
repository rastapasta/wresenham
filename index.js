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

  let x0 = from[0],
      y0 = from[1],
      x1 = to[0],
      y1 = to[1],
      dx = Math.abs(x1-x0),
      sx = x0 < x1 ? 1 : -1,
      dy = Math.abs(y1-y0),
      sy = y0 < y1 ? 1 : -1,
      err = dx-dy,
      ed = dx+dy === 0 ? 1 : Math.sqrt(dx*dx+dy*dy),
      width = (width+1)/2;

  while(true) {
    callback(x0, y0);
    e2 = err;
    x2 = x0;

    // loop over all horizontal parts
    if (2*e2 >= -dx) {
      e2 += dy;
      y2 = y0;
      while (e2 < ed*width && (y1 != y2 || dx > dy)) {
        callback(x0, y2 += sy);
        e2 += dx;
      }
      if (x0 === x1) {
        break;
      }
      e2 = err;
      err -= dy;
      x0 += sx;
    }

    // loop over all vertical parts
    if (2*e2 <= dy) {
      e2 = dx-e2;
      while (e2 < ed*width && (x1 != x2 || dx < dy)) {
        callback(x2 += sx, y0);
        e2 += dy;
      }
      if (y0 === y1) {
        break;
      }
      err += dx;
      y0 += sy;
    }
  }
};
