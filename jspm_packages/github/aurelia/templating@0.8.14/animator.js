System.register([], function (_export) {
  var _createClass, _classCallCheck, Animator;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Animator = _export("Animator", (function () {
        function Animator() {
          _classCallCheck(this, Animator);

          Animator.instance = this;
          this.animationStack = [];
        }

        _createClass(Animator, {
          addMultipleEventListener: {
            value: function addMultipleEventListener(el, s, fn) {
              var evts = s.split(" "),
                  i,
                  ii;

              for (i = 0, ii = evts.length; i < ii; ++i) {
                el.addEventListener(evts[i], fn, false);
              }
            }
          },
          addAnimationToStack: {
            value: function addAnimationToStack(animId) {
              if (this.animationStack.indexOf(animId) < 0) {
                this.animationStack.push(animId);
              }
            }
          },
          removeAnimationFromStack: {
            value: function removeAnimationFromStack(animId) {
              var idx = this.animationStack.indexOf(animId);
              if (idx > -1) {
                this.animationStack.splice(idx, 1);
              }
            }
          },
          move: {
            value: function move() {
              return Promise.resolve(false);
            }
          },
          enter: {
            value: function enter(element) {
              return Promise.resolve(false);
            }
          },
          leave: {
            value: function leave(element) {
              return Promise.resolve(false);
            }
          },
          removeClass: {
            value: function removeClass(element, className) {
              return Promise.resolve(false);
            }
          },
          addClass: {
            value: function addClass(element, className) {
              return Promise.resolve(false);
            }
          }
        });

        return Animator;
      })());
    }
  };
});