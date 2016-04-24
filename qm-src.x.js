"use strict"
const vector = (x, y) => ({
  x, y,
  set mag(n) {
    var dir = @dir
    @x = n * Math.cos(dir)
    @y = n * Math.sin(dir)
    return @mag
  },
  get mag() {
    return Math.sqrt(@x * @x + @y * @y)
  },
  set dir(turn) {
    var mag = @mag
    @x = mag * Math.cos(turn)
    @y = mag * Math.sin(turn)
    return @
  }
  get dir() {
    return Math.atan(@y / @x)
  }
}

const thing = (x, y, z, sps) => {
  x, y, z, sps,
  step(n = 1) {
    
  }
})
