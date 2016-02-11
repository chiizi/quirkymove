"use strict";
var Vector = class {
  constructor(args) {
    this.xl = args.x;
    this.yl = args.y;
  }
  set x(n) {
    return this.xl = n;
  }
  get x() {
    return this.xl;
  }
  set y(n) {
    return this.yl = n;
  }
  get y() {
    return this.yl;
  }
  set mag(n) {
    var dir = this.dir;
    this.x = n * Math.cos(dir);
    this.y = n * Math.sin(dir);
    return this.mag;
  }
  get mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  set dir(turn) {
    var mag = this.mag;
    this.x = mag * Math.cos(turn);
    this.y = mag * Math.sin(turn);
    return this.dir;
  }
  get dir() {
    return Math.atan(this.y / this.x);
  }
};

var Thing = class {
  constructor(args) {
    
  }
};
