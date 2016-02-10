var Vector = (function() {
  "use strict";
  return class {
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
    get x() {
      return this.xl;
    }
    get mag() {
      
    }
    set dir(turn) {
      // var angle = 
    }
  }
})();
