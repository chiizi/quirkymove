"use strict";
var Vector = class {
  constructor(args) {
    @xl = args.x;
    @yl = args.y;
  }
  set x(n) {
    return @xl = n;
  }
  get x() {
    return @xl;
  }
  set y(n) {
    return @yl = n;
  }
  get y() {
    return @yl;
  }
  set mag(n) {
    var dir = @dir;
    @x = n * Math.cos(dir);
    @y = n * Math.sin(dir);
    return @mag;
  }
  get mag() {
    return Math.sqrt(@x * @x + @y * @y);
  }
  set dir(turn) {
    var mag = @mag;
    @x = mag * Math.cos(turn);
    @y = mag * Math.sin(turn);
    return @dir;
  }
  get dir() {
    return Math.atan(@y / @x);
  }
};

var Thing = class {
  constructor(args) {
    @x = args.x || 0;
    @y = args.y || 0;
    @z = args.z || 0;
    @stepsPerSecond = args.stepsPerSecond || 1;
  }
  step(n) {
    n ||= 1;
  }
};
