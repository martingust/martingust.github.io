System.register([], function (_export) {
  var ScrollHandler;

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  return {
    setters: [],
    execute: function () {
      'use strict';

      ScrollHandler = (function () {
        function ScrollHandler() {
          _classCallCheck(this, ScrollHandler);

          this.listener = null;
          this.view = null;
          this.indicator = null;
          this.relative = null;
          this.offset = null;
          this.reference = null;
          this.passed = null;
          this.velocity = null;
          this.frame = null;
          this.timestamp = null;
          this.ticker = null;
          this.amplitude = null;
          this.target = null;
          this.timeConstant = 325;
          this.firefoxMultitude = 30;
          this.mouseMultitude = 1;
          this.keyStep = 120;
          this.isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
          this.hasTouchWin = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1;
          this.hasPointer = !!window.navigator.msPointerEnabled;
          this.hasKeyDown = 'onkeydown' in document;
          this.hasWheelEvent = 'onwheel' in document;
          this.hasMouseWheelEvent = 'onmousewheel' in document;
          this.prevFrame = 0;
          this.touchOnSameFrameCount = 0;
        }

        ScrollHandler.prototype.initialize = function initialize(view, listener) {
          var _this = this;

          this.listener = listener;

          if (this.hasWheelEvent) {
            view.addEventListener('wheel', function (e) {
              return _this.wheel(e);
            });
          }

          if (this.hasMouseWheelEvent) {
            view.addEventListener('mousewheel', function (e) {
              return _this.mouseWheel(e);
            });
          }

          if (typeof window.ontouchstart !== 'undefined') {
            view.addEventListener('touchstart', function (e) {
              return _this.touchStart(e);
            });
            view.addEventListener('touchmove', function (e) {
              return _this.touchMove(e);
            });
            view.addEventListener('touchend', function (e) {
              return _this.touchEnd(e);
            });
          }

          if (this.hasPointer && this.hasTouchWin) {
            this.bodyTouchAction = document.body.style.msTouchAction;
            view.body.style.msTouchAction = 'none';
            view.addEventListener('MSPointerDown', function (e) {
              return _this.tap(e);
            }, true);
            view.addEventListener('MSPointerMove', function (e) {
              return _this.drag(e);
            }, true);
          }

          if (this.hasKeyDown) {
            view.addEventListener('keydown', function (e) {
              return _this.keyDown(e);
            }, false);
          }

          this.offset = 0;
          this.pressed = false;
        };

        ScrollHandler.prototype.ypos = function ypos(event) {
          if (event.targetTouches && event.targetTouches.length >= 1) {
            return event.targetTouches[0].clientY;
          }

          return event.clientY;
        };

        ScrollHandler.prototype.autoScroll = function autoScroll() {
          var _this2 = this;

          var elapsed, delta;
          if (this.amplitude) {
            elapsed = Date.now() - this.timestamp;
            delta = this.amplitude * Math.exp(-elapsed / this.timeConstant);
            if (delta > 0.5 || delta < -0.5) {
              this.offset = this.listener(delta);
              requestAnimationFrame(function () {
                return _this2.autoScroll();
              });
            }
          }
        };

        ScrollHandler.prototype.track = function track() {
          var now, elapsed, delta, v;

          now = Date.now();
          elapsed = now - this.timestamp;
          this.timestamp = now;
          delta = this.offset - this.frame;
          this.frame = this.offset;

          v = 1000 * delta / (1 + elapsed);
          this.velocity = 0.3 * v + 0.2 * this.velocity;
        };

        ScrollHandler.prototype.touchMove = function touchMove(event) {
          var y, delta;
          if (this.pressed) {
            y = this.ypos(event);
            delta = this.reference - y;
            if (delta > 2 || delta < -2) {
              this.reference = y;
              this.offset = this.listener(-delta);
            }
          }
          event.preventDefault();
          event.stopPropagation();
          return false;
        };

        ScrollHandler.prototype.touchStart = function touchStart(event) {
          var _this3 = this;

          this.pressed = true;
          this.reference = this.ypos(event);

          this.velocity = this.amplitude = 0;
          this.frame = this.offset;
          this.timestamp = Date.now();
          clearInterval(this.ticker);
          this.ticker = setInterval(function () {
            return _this3.track();
          }, 10);

          event.preventDefault();
          event.stopPropagation();
          return false;
        };

        ScrollHandler.prototype.touchEnd = function touchEnd(event) {
          var _this4 = this;

          this.pressed = false;

          clearInterval(this.ticker);
          if (this.velocity > 10 || this.velocity < -10) {
            this.amplitude = 0.2 * this.velocity;
            this.target = Math.round(this.offset + this.amplitude);
            this.timestamp = Date.now();
            requestAnimationFrame(function () {
              return _this4.autoScroll();
            });
          }

          event.preventDefault();
          event.stopPropagation();
          return false;
        };

        ScrollHandler.prototype.mouseWheel = function mouseWheel(event) {
          var delta = event.wheelDeltaY ? event.wheelDeltaY : event.wheelDelta;

          this.offset = this.listener(delta);
        };

        ScrollHandler.prototype.wheel = function wheel(event) {
          var delta = event.wheelDeltaY || event.deltaY;

          if (this.isFirefox && event.deltaMode == 1) {
            delta *= this.firefoxMultitude;
            delta = -delta;
          }

          delta *= this.mouseMultitude;

          this.offset = this.listener(delta, 0.1);
        };

        ScrollHandler.prototype.keyDown = function keyDown(event) {
          var delta = 0;
          switch (event.keyCode) {
            case 38:
              delta = this.keyStep;
              break;
            case 40:
              delta = -this.keyStep;
              break;
          }

          this.offset = this.listener(delta);
        };

        ScrollHandler.prototype.dispose = function dispose() {};

        return ScrollHandler;
      })();

      _export('ScrollHandler', ScrollHandler);
    }
  };
});