System.register(['aurelia-dependency-injection', 'aurelia-binding', 'aurelia-templating'], function (_export) {
  var inject, ObserverLocator, calcSplices, getChangeRecords, BoundViewFactory, ViewSlot, customAttribute, bindable, templateController, _classCallCheck, _createClass, VirtualRepeat;

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaBinding) {
      ObserverLocator = _aureliaBinding.ObserverLocator;
      calcSplices = _aureliaBinding.calcSplices;
      getChangeRecords = _aureliaBinding.getChangeRecords;
    }, function (_aureliaTemplating) {
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
      customAttribute = _aureliaTemplating.customAttribute;
      bindable = _aureliaTemplating.bindable;
      templateController = _aureliaTemplating.templateController;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      VirtualRepeat = (function () {
        function VirtualRepeat(element, viewFactory, viewSlot, observerLocator) {
          _classCallCheck(this, _VirtualRepeat);

          this.element = element;
          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.observerLocator = observerLocator;
          this.local = 'item';
          this.touchMultitude = 2;
          this.firefoxMultitude = 15;
          this.mouseMultitude = 1;
          this.keyStep = 120;
          this.listeners = [];
          this.initialized = false;
          this.hasWheelEvent = 'onwheel' in document;
          this.hasMouseWheelEvent = 'onmousewheel' in document;
          this.hasTouch = 'ontouchstart' in document;
          this.hasKeyDown = 'onkeydown' in document;
          this.hasTouchWin = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1;
          this.hasPointer = !!window.navigator.msPointerEnabled;
          this.ease = 0.1;
          this.targetY = 0;
          this.currentY = 0;
          this.previousY = 0;
          this.first = 0;
          this.previousFirst = 0;
          this.isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
          this.numberOfDomElements = 0;
          this.event = {
            y: 0,
            x: 0,
            deltaX: 0,
            deltaY: 0,
            originalEvent: null
          };
        }

        _createClass(VirtualRepeat, [{
          key: 'bind',
          value: function bind(executionContext) {
            var _this = this;

            this.executionContext = executionContext;
            this.virtualScroll = this.element.parentElement.parentElement;
            this.virtualScrollInner = this.element.parentElement;
            this.virtualScroll.addEventListener('touchmove', function (e) {
              e.preventDefault();
            });

            this.initialize(this.virtualScroll, function (target) {
              _this.targetY += target.deltaY;
              _this.targetY = Math.max(-_this.scrollViewHeight, _this.targetY);
              _this.targetY = Math.min(0, _this.targetY);
            });

            var row = this.createFullExecutionContext(this.items[0], 0, 1);
            var view = this.viewFactory.create(row);
            this.viewSlot.add(view);
          }
        }, {
          key: 'attached',
          value: function attached() {
            var virtualScrollHeight, row, view;
            this.listItems = this.element.parentElement.children;
            this.itemHeight = this.listItems[0].getBoundingClientRect().height;
            virtualScrollHeight = this.virtualScroll.getBoundingClientRect().height;
            this.numberOfDomElements = Math.ceil(virtualScrollHeight / this.itemHeight) + 1;

            for (var i = 1, ii = this.numberOfDomElements; i < ii; ++i) {
              row = this.createFullExecutionContext(this.items[i], i, ii);
              view = this.viewFactory.create(row);
              this.viewSlot.add(view);
            }

            this.calculateScrollViewHeight();
            this.processItems();
          }
        }, {
          key: 'processItems',
          value: function processItems() {
            var _this2 = this;

            var items = this.items,
                i,
                ii,
                observer;

            observer = this.observerLocator.getArrayObserver(items);

            for (i = 1, ii = this.virtualScrollInner.children.length; i < ii; ++i) {
              var node = this.virtualScrollInner.children[i];
              node.className = node.className + ' ' + i;
            }

            this.disposeSubscription = observer.subscribe(function (splices) {
              _this2.handleSplices(items, splices);
            });

            this.scroll();
          }
        }, {
          key: 'scroll',
          value: function scroll() {
            var _this3 = this;

            var scrollView = this.virtualScrollInner,
                itemHeight = this.itemHeight,
                items = this.items,
                viewSlot = this.viewSlot,
                numberOfDomElements = this.numberOfDomElements,
                node,
                marginTop,
                translateStyle,
                view,
                first;

            this.currentY += (this.targetY - this.currentY) * this.ease;
            this.currentY = Math.round(this.currentY * 1);

            if (this.currentY === this.previousY) {
              requestAnimationFrame(function () {
                return _this3.scroll();
              });
              return;
            }

            this.previousY = this.currentY;
            this.first = Math.ceil(this.currentY / itemHeight) * -1;
            first = this.first;

            if (first > this.previousFirst && first + numberOfDomElements - 1 <= items.length) {
              this.previousFirst = first;

              view = viewSlot.children[0];
              view.executionContext = this.updateExecutionContext(view.executionContext, first + numberOfDomElements - 1, items.length);
              view.executionContext[this.local] = items[first + numberOfDomElements - 1];
              viewSlot.children.push(viewSlot.children.shift());

              node = scrollView.children[0];
              scrollView.insertBefore(node, scrollView.children[numberOfDomElements]);

              marginTop = itemHeight * first + 'px';
              scrollView.style.marginTop = marginTop;
            } else if (first < this.previousFirst) {
              this.previousFirst = first;

              view = viewSlot.children[numberOfDomElements - 1];
              view.executionContext[this.local] = items[first];
              view.executionContext = this.updateExecutionContext(view.executionContext, first, items.length);
              viewSlot.children.unshift(viewSlot.children.splice(-1, 1)[0]);

              node = scrollView.children[numberOfDomElements - 1];
              scrollView.insertBefore(node, scrollView.children[0]);

              marginTop = itemHeight * first + 'px';
              scrollView.style.marginTop = marginTop;
            }

            translateStyle = 'translate3d(0px,' + this.currentY + 'px,0px)';

            this.virtualScrollInner.style.webkitTransform = translateStyle;
            this.virtualScrollInner.style.msTransform = translateStyle;
            this.virtualScrollInner.style.transform = translateStyle;

            requestAnimationFrame(function () {
              return _this3.scroll();
            });
          }
        }, {
          key: 'createBaseExecutionContext',
          value: function createBaseExecutionContext(data) {
            var context = {};
            context[this.local] = data;
            return context;
          }
        }, {
          key: 'createFullExecutionContext',
          value: function createFullExecutionContext(data, index, length) {
            var context = this.createBaseExecutionContext(data);
            return this.updateExecutionContext(context, index, length);
          }
        }, {
          key: 'updateExecutionContext',
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
        }, {
          key: 'handleSplices',
          value: function handleSplices(items, splices) {
            var numberOfDomElements = this.numberOfDomElements,
                viewSlot = this.viewSlot,
                first = this.first,
                totalAdded = 0,
                i,
                ii,
                view,
                marginTop,
                addIndex,
                splice,
                end,
                atBottom;
            this.items = items;

            for (i = 0, ii = viewSlot.children.length; i < ii; ++i) {
              view = viewSlot.children[i];
              view.executionContext[this.local] = items[first + i];
              view.executionContext = this.updateExecutionContext(view.executionContext, first + i, items.length);
              if (!view.executionContext[this.local]) {
                viewSlot.removeAt(view.executionContext.$index);
              }
            }

            for (i = 0, ii = splices.length; i < ii; ++i) {
              splice = splices[0];
              addIndex = splices[i].index;
              end = splice.index + splice.addedCount;
              totalAdded += splice.addedCount;

              for (; addIndex < end; ++addIndex) {
                if (addIndex < first + numberOfDomElements && !atBottom) {
                  marginTop = this.itemHeight * first + 'px';
                  this.virtualScrollInner.style.marginTop = marginTop;
                }
              }
            }

            this.calculateScrollViewHeight();
          }
        }, {
          key: 'handleSplicesOld',
          value: function handleSplicesOld(items, splices) {
            var numberOfDomElements = this.numberOfDomElements,
                viewSlot = this.viewSlot,
                first = this.first,
                totalAdded = 0,
                i,
                ii,
                j,
                k,
                view,
                marginTop,
                addIndex,
                domAddIndex,
                childIndex,
                splice,
                end,
                children,
                length,
                spliceIndexLow;
            this.items = items;

            for (i = 0, ii = splices.length; i < ii; ++i) {
              splice = splices[0];
              addIndex = splices[i].index;
              end = splice.index + splice.addedCount;
              totalAdded += splice.addedCount;

              for (; addIndex < end; ++addIndex) {
                if (addIndex < first + numberOfDomElements) {
                  spliceIndexLow = !spliceIndexLow ? first : spliceIndexLow;
                  childIndex = numberOfDomElements - 1;
                  view = viewSlot.children[childIndex];
                  view.executionContext.item = items[addIndex];
                  domAddIndex = addIndex - first;
                  VirtualRepeat.moveItem(viewSlot.children, childIndex, domAddIndex);

                  if (childIndex !== addIndex - first) {
                    var node = this.virtualScrollInner.children[childIndex];
                    this.virtualScrollInner.insertBefore(node, this.virtualScrollInner.children[domAddIndex]);

                    marginTop = this.itemHeight * first + 'px';
                    this.virtualScrollInner.style.marginTop = marginTop;
                  }
                }
              }
            }

            this.calculateScrollViewHeight();

            children = viewSlot.children;
            length = children.length;
            for (j = 0; j < length; j++) {
              this.updateExecutionContext(children[j].executionContext, children[j].executionContext.$index + totalAdded, length);
            }
          }
        }, {
          key: 'calculateScrollViewHeight',
          value: function calculateScrollViewHeight() {
            this.scrollViewHeight = this.items.length * this.itemHeight - (this.numberOfDomElements - 1) * this.itemHeight + 1 * this.itemHeight;
          }
        }, {
          key: 'initialize',
          value: function initialize(element, listener) {
            if (!this.initialized) {
              this.initListeners(element);
            }
            this.listeners.push(listener);
          }
        }, {
          key: 'initListeners',
          value: function initListeners(element) {
            var _this4 = this;

            if (this.hasWheelEvent) element.addEventListener('wheel', function (e) {
              return _this4.onWheel(e);
            });
            if (this.hasMouseWheelEvent) element.addEventListener('mousewheel', function (e) {
              return _this4.onMouseWheel(e);
            });

            if (this.hasTouch) {
              element.addEventListener('touchstart', function (e) {
                return _this4.onTouchStart(e);
              });
              element.addEventListener('touchmove', function (e) {
                return _this4.onTouchMove(e);
              });
            }

            if (this.hasPointer && this.hasTouchWin) {
              this.bodyTouchAction = document.body.style.msTouchAction;
              element.body.style.msTouchAction = 'none';
              element.addEventListener('MSPointerDown', function (e) {
                return _this4.onTouchStart(e);
              }, true);
              element.addEventListener('MSPointerMove', function (e) {
                return _this4.onTouchMove(e);
              }, true);
            }

            if (this.hasKeyDown) {
              element.addEventListener('keydown', function (e) {
                return _this4.onKeyDown(e);
              }, false);
            }

            this.initialized = true;
          }
        }, {
          key: 'notify',
          value: function notify(event) {
            var i, ii;
            this.event.x += this.event.deltaX;
            this.event.y += this.event.deltaY;
            this.event.originalEvent = event;

            for (i = 0, ii = this.listeners.length; i < ii; ++i) {
              this.listeners[i](this.event);
            }
          }
        }, {
          key: 'onWheel',
          value: function onWheel(event) {
            this.event.deltaX = event.wheelDeltaX || event.deltaX * -1;
            this.event.deltaY = event.wheelDeltaY || event.deltaY * -1;

            if (this.isFirefox && event.deltaMode == 1) {
              this.event.deltaX *= this.firefoxMultitude;
              this.event.deltaY *= this.firefoxMultitude;
            }

            this.event.deltaX *= this.mouseMultitude;
            this.event.deltaY *= this.mouseMultitude;

            this.notify(event);
          }
        }, {
          key: 'onMouseWheel',
          value: function onMouseWheel(event) {
            this.event.deltaX = event.wheelDeltaX ? event.wheelDeltaX : 0;
            this.event.deltaY = event.wheelDeltaY ? event.wheelDeltaY : event.wheelDelta;

            this.notify(event);
          }
        }, {
          key: 'onTouchStart',
          value: function onTouchStart(event) {
            var t = event.targetTouches ? event.targetTouches[0] : event;
            this.touchStartX = t.pageX;
            this.touchStartY = t.pageY;
          }
        }, {
          key: 'onTouchMove',
          value: function onTouchMove(event) {
            var t = event.targetTouches ? event.targetTouches[0] : event;

            this.event.deltaX = (t.pageX - this.touchStartX) * this.touchMultitude;
            this.event.deltaY = (t.pageY - this.touchStartY) * this.touchMultitude;

            this.touchStartX = t.pageX;
            this.touchStartY = t.pageY;

            this.notify(event);
          }
        }, {
          key: 'onKeyDown',
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
        }], [{
          key: 'moveItem',
          value: function moveItem(array, pos1, pos2) {
            var i, tmp;

            pos1 = parseInt(pos1, 10);
            pos2 = parseInt(pos2, 10);

            if (pos1 !== pos2 && 0 <= pos1 && pos1 <= array.length && 0 <= pos2 && pos2 <= array.length) {
              tmp = array[pos1];

              if (pos1 < pos2) {
                for (i = pos1; i < pos2; i++) {
                  array[i] = array[i + 1];
                }
              } else {
                for (i = pos1; i > pos2; i--) {
                  array[i] = array[i - 1];
                }
              }

              array[pos2] = tmp;
            }
          }
        }]);

        var _VirtualRepeat = VirtualRepeat;
        VirtualRepeat = customAttribute('virtual-repeat')(VirtualRepeat) || VirtualRepeat;
        VirtualRepeat = bindable('items')(VirtualRepeat) || VirtualRepeat;
        VirtualRepeat = bindable('local')(VirtualRepeat) || VirtualRepeat;
        VirtualRepeat = templateController(VirtualRepeat) || VirtualRepeat;
        VirtualRepeat = inject(Element, BoundViewFactory, ViewSlot, ObserverLocator)(VirtualRepeat) || VirtualRepeat;
        return VirtualRepeat;
      })();

      _export('VirtualRepeat', VirtualRepeat);
    }
  };
});