System.register(["aurelia-binding", "aurelia-templating"], function (_export) {
  var ObserverLocator, calcSplices, getChangeRecords, Behavior, BoundViewFactory, ViewSlot, _createClass, _classCallCheck, VirtualRepeat;

  return {
    setters: [function (_aureliaBinding) {
      ObserverLocator = _aureliaBinding.ObserverLocator;
      calcSplices = _aureliaBinding.calcSplices;
      getChangeRecords = _aureliaBinding.getChangeRecords;
    }, function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      VirtualRepeat = _export("VirtualRepeat", (function () {
        function VirtualRepeat(element, viewFactory, viewSlot, observerLocator) {
          _classCallCheck(this, VirtualRepeat);

          this.element = element;
          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.observerLocator = observerLocator;
          this.local = "item";
          this.touchMult = 2;
          this.firefoxMult = 15;
          this.keyStep = 120;
          this.mouseMult = 1;
          this.numListeners = [];
          this.listeners = [];
          this.initialized = false;
          this.hasWheelEvent = "onwheel" in document;
          this.hasMouseWheelEvent = "onmousewheel" in document;
          this.hasTouch = "ontouchstart" in document;
          this.hasTouchWin = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1;
          this.hasPointer = !!window.navigator.msPointerEnabled;
          this.hasKeyDown = "onkeydown" in document;
          this.event = {
            y: 0,
            x: 0,
            deltaX: 0,
            deltaY: 0,
            originalEvent: null
          };
          this.ease = 0.1;
          this.targetY = 0;
          this.currentY = 0;
          this.previousY = 0;
          this.first = 0;
          this.previousFirst = 0;
          this.isFirefox = navigator.userAgent.indexOf("Firefox") > -1; // TODO change this
          this.numberOfDomElements = 5; // TODO Calculate this
        }

        _createClass(VirtualRepeat, {
          bind: {
            value: function bind(executionContext) {
              var _this = this;

              this.list = this.element.parentElement.parentElement; // TODO better name
              this.scrollView = this.element.parentElement; // TODO better name
              this.list.addEventListener("touchmove", function (e) {
                e.preventDefault();
              });

              this.initialize(this.list, function (target) {
                _this.targetY += target.deltaY;
                _this.targetY = Math.max(-_this.scrollViewHeight, _this.targetY);
                _this.targetY = Math.min(0, _this.targetY);
              });

              this.processItems();
            }
          },
          attached: {
            value: function attached() {
              this.listItems = this.element.parentElement.children;
              this.itemHeight = this.listItems[0].getBoundingClientRect().height;
              this.list.style.height = this.itemHeight * (this.numberOfDomElements - 1) + "px";
              this.scrollViewHeight = this.scrollView.getBoundingClientRect().height - this.itemHeight;
            }
          },
          processItems: {
            value: function processItems() {
              var items = this.items,
                  viewFactory = this.viewFactory,
                  viewSlot = this.viewSlot,
                  i,
                  ii,
                  row,
                  view;

              for (i = 0, ii = this.numberOfDomElements; i < ii; ++i) {
                row = this.createFullExecutionContext(items[i], i, ii);
                view = viewFactory.create(row);
                viewSlot.add(view);
              }

              this.scroll();
            }
          },
          scroll: {
            value: function scroll() {
              var _this = this;

              var scrollView = this.scrollView,
                  itemHeight = this.itemHeight,
                  items = this.items,
                  viewSlot = this.viewSlot,
                  numberOfDomElements = this.numberOfDomElements,
                  node,
                  marginTop,
                  translateStyle,
                  view;

              this.currentY += (this.targetY - this.currentY) * this.ease;
              this.currentY = Math.round(this.currentY * 1);

              if (this.currentY === this.previousY) {
                requestAnimationFrame(function () {
                  return _this.scroll();
                });
                return;
              }

              this.previousY = this.currentY;
              this.first = Math.ceil(this.currentY / itemHeight);

              if (this.first !== this.previousFirst && this.first < this.previousFirst) {
                // TODO set up/down boolean
                this.previousFirst = this.first;

                view = viewSlot.children[0];
                view.executionContext.item = items[-this.first + numberOfDomElements];
                viewSlot.children.push(viewSlot.children.shift());

                node = scrollView.children[0];
                scrollView.insertBefore(node, scrollView.children[numberOfDomElements]);

                marginTop = -1 * itemHeight * this.first + "px";
                scrollView.style.marginTop = marginTop;
                this.scrollViewHeight = this.scrollViewHeight + this.itemHeight;
              } else if (this.first !== this.previousFirst && this.first > this.previousFirst) {
                this.previousFirst = this.first;

                view = viewSlot.children[numberOfDomElements - 1];
                view.executionContext.item = items[-this.first + 1];
                viewSlot.children.unshift(viewSlot.children.splice(-1, 1)[0]);

                node = scrollView.children[numberOfDomElements - 1];
                scrollView.insertBefore(node, scrollView.children[0]);

                marginTop = -1 * itemHeight * this.first + "px";
                scrollView.style.marginTop = marginTop;
                this.scrollViewHeight = this.scrollViewHeight + this.itemHeight;
              }

              translateStyle = "translate3d(0px," + this.currentY + "px,0px)";

              this.scrollView.style.webkitTransform = translateStyle;
              this.scrollView.style.msTransform = translateStyle;
              this.scrollView.style.transform = translateStyle;

              requestAnimationFrame(function () {
                return _this.scroll();
              });
            }
          },
          createBaseExecutionContext: {
            value: function createBaseExecutionContext(data) {
              var context = {};
              context[this.local] = data;
              return context;
            }
          },
          createFullExecutionContext: {
            value: function createFullExecutionContext(data, index, length) {
              var context = this.createBaseExecutionContext(data);
              return this.updateExecutionContext(context, index, length);
            }
          },
          updateExecutionContext: {
            value: function updateExecutionContext(context, index, length) {
              var first = index === 0,
                  last = index === length - 1,
                  even = index % 2 === 0;

              context.$parent = this.executionContext;
              context.$index = index;
              context.$first = first;
              context.$last = last;
              context.$middle = !(first || last);
              context.$odd = !even;
              context.$even = even;

              return context;
            }
          },
          initialize: {
            value: function initialize(element, listener) {
              if (!this.initialized) {
                this.initListeners(element);
              }
              this.listeners.push(listener);
              this.numListeners = this.listeners.length; // TODO remove this?
            }
          },
          initListeners: {
            value: function initListeners(element) {
              var _this = this;

              if (this.hasWheelEvent) element.addEventListener("wheel", function (e) {
                return _this.onWheel(e);
              });
              if (this.hasMouseWheelEvent) element.addEventListener("mousewheel", function (e) {
                return _this.onMouseWheel(e);
              });

              if (this.hasTouch) {
                element.addEventListener("touchstart", function (e) {
                  return _this.onTouchStart(e);
                });
                element.addEventListener("touchmove", function (e) {
                  return _this.onTouchMove(e);
                });
              }

              if (this.hasPointer && this.hasTouchWin) {
                this.bodyTouchAction = document.body.style.msTouchAction;
                element.body.style.msTouchAction = "none";
                element.addEventListener("MSPointerDown", function (e) {
                  return _this.onTouchStart(e);
                }, true);
                element.addEventListener("MSPointerMove", function (e) {
                  return _this.onTouchMove(e);
                }, true);
              }

              if (this.hasKeyDown) {
                element.addEventListener("keydown", function (e) {
                  return _this.onKeyDown(e);
                }, false);
              }

              this.initialized = true;
            }
          },
          notify: {
            value: function notify(event) {
              this.event.x += this.event.deltaX;
              this.event.y += this.event.deltaY;
              this.event.originalEvent = event;

              for (var i = 0; i < this.numListeners; i++) {
                this.listeners[i](this.event);
              }
            }
          },
          onWheel: {
            value: function onWheel(event) {
              this.event.deltaX = event.wheelDeltaX || event.deltaX * -1;
              this.event.deltaY = event.wheelDeltaY || event.deltaY * -1;

              if (this.isFirefox && event.deltaMode == 1) {
                this.event.deltaX *= this.firefoxMult;
                this.event.deltaY *= this.firefoxMult;
              }

              this.event.deltaX *= this.mouseMult;
              this.event.deltaY *= this.mouseMult;

              this.notify(event);
            }
          },
          onMouseWheel: {
            value: function onMouseWheel(event) {
              this.event.deltaX = event.wheelDeltaX ? event.wheelDeltaX : 0;
              this.event.deltaY = event.wheelDeltaY ? event.wheelDeltaY : event.wheelDelta;

              this.notify(event);
            }
          },
          onTouchStart: {
            value: function onTouchStart(event) {
              var t = event.targetTouches ? event.targetTouches[0] : event;
              this.touchStartX = t.pageX;
              this.touchStartY = t.pageY;
            }
          },
          onTouchMove: {
            value: function onTouchMove(event) {
              var t = event.targetTouches ? event.targetTouches[0] : event;

              this.event.deltaX = (t.pageX - this.touchStartX) * this.touchMult;
              this.event.deltaY = (t.pageY - this.touchStartY) * this.touchMult;

              this.thistouchStartX = t.pageX;
              this.thistouchStartY = t.pageY;

              this.notify(event);
            }
          },
          onKeyDown: {
            value: function onKeyDown(event) {
              this.event.deltaX = this.event.deltaY = 0;
              switch (event.keyCode) {
                case 37:
                  this.event.deltaX = -this.keyStep;
                  break;
                case 39:
                  this.event.deltaX = this.keyStep;
                  break;
                case 38:
                  this.event.deltaY = this.keyStep;
                  break;
                case 40:
                  this.event.deltaY = -this.keyStep;
                  break;
              }

              this.notify(event);
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.templateController("virtual-repeat").withProperty("items", "itemsChanged", "virtual-repeat").withProperty("local");
            }
          },
          inject: {
            value: function inject() {
              return [Element, BoundViewFactory, ViewSlot, ObserverLocator];
            }
          }
        });

        return VirtualRepeat;
      })());
    }
  };
});