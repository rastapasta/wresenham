# wresenham - B*resenham* line algorithm with *W*idth

A JavaScript library to calculate all points on a line, given two points and a stroke width.

## How does it work?

* Inspired by [Alois Zingl's "The Beauty of Bresenham's Algorithm"](http://members.chello.at/~easyfilter/bresenham.html)
* Falls back to [bresenham](https://github.com/madbence/node-bresenham) for width < 1
* All points points in the given line are passed to the callback.

## How to install

Install it into your project with
```
npm install --save wresenham
```

## How to use it

```js
const wresenham = require('wresenham');

let from = [0, 0];
let to = [4, 4];
let width = 2;

wresenham(from, to, width, (x, y) => console.log(x, y));
```

## License
#### The MIT License (MIT)
Copyright (c) 2017 Michael Straßburger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
