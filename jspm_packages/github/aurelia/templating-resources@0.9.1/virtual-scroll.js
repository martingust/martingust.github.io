System.register([], function (_export) {
  var _createClass, _classCallCheck, VirtualScroll;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      VirtualScroll = _export("VirtualScroll", (function () {
        function VirtualScroll() {
          _classCallCheck(this, VirtualScroll);

          this.virtualScroll = {};
          this.numListeners = [];
          this.listeners = [];
          this.initialized = false;
          this.touchStartX = 0;
          this.touchStartY = 0;
          this.touchMult = 2;
          this.firefoxMult = 15;
          this.keyStep = 120;
          this.mouseMult = 1;
          this.bodyTouchAction = undefined;
          this.hasWheelEvent = "onwheel" in document;
          this.hasMouseWheelEvent = "onmousewheel" in document;
          this.hasTouch = "ontouchstart" in document;
          this.hasTouchWin = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1;
          this.hasPointer = !!window.navigator.msPointerEnabled;
          this.hasKeyDown = "onkeydown" in document;
          this.isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
          this.event = {
            y: 0,
            x: 0,
            deltaX: 0,
            deltaY: 0,
            originalEvent: null
          };
        }

        _createClass(VirtualScroll, {
          on: {
            value: function on(element, listener) {
              if (!this.initialized) {
                this.initListeners(element);
              }
              this.listeners.push(listener);
              this.numListeners = this.listeners.length;
            }
          },
          off: {
            value: function off(listener) {
              this.listeners.splice(listener, 1);
              this.numListeners = this.listeners.length;
              if (this.numListeners <= 0) destroyListeners();
            }
          },
          configure: {
            value: function configure() {
              var keyStep = arguments[0] === undefined ? 120 : arguments[0];
              var firefoxMult = arguments[1] === undefined ? 15 : arguments[1];
              var touchMult = arguments[2] === undefined ? 2 : arguments[2];
              var mouseMult = arguments[3] === undefined ? 1 : arguments[3];

              this.keyStep = keyStep;
              this.firefoxMult = firefoxMult;
              this.touchMult = touchMult;
              this.mouseMult = mouseMult;
            }
          },
          initListeners: {
            value: function initListeners(element) {
              if (this.hasWheelEvent) element.addEventListener("wheel", onWheel);
              if (this.hasMouseWheelEvent) element.addEventListener("mousewheel", onMouseWheel);

              if (this.hasTouch) {
                element.addEventListener("touchstart", onTouchStart);
                element.addEventListener("touchmove", onTouchMove);
              }

              if (this.hasPointer && this.hasTouchWin) {
                this.bodyTouchAction = document.body.style.msTouchAction;
                element.body.style.msTouchAction = "none";
                element.addEventListener("MSPointerDown", onTouchStart, true);
                element.addEventListener("MSPointerMove", onTouchMove, true);
              }

              if (this.hasKeyDown) {
                element.addEventListener("keydown", onKeyDown);
              }

              this.initialized = true;
            }
          }
        });

        return VirtualScroll;
      })());
    }
  };
});