const wresenham = require('../');

const logPoint = (x, y) => console.log(`x: ${x} y: ${y}`);

const from = [0, 5];
const to = [10, 5];

[1, 2, 3].forEach(width => {
  console.log(`line width width ${width}`);
  wresenham(from, to, width, logPoint);
});
