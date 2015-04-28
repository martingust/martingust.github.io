System.register(['aurelia-dependency-injection', 'aurelia-binding', 'aurelia-templating', './scroll-listener'], function (_export) {
  var inject, ObserverLocator, calcSplices, getChangeRecords, BoundViewFactory, ViewSlot, customAttribute, bindable, templateController, ScrollListener, _classCallCheck, _createClass, VirtualRepeat;

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
    }, function (_scrollListener) {
      ScrollListener = _scrollListener.ScrollListener;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      VirtualRepeat = (function () {
        function VirtualRepeat(element, viewFactory, viewSlot, observerLocator, scrollListener) {
          _classCallCheck(this, _VirtualRepeat);

          this.element = element;
          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.observerLocator = observerLocator;
          this.scrollListener = scrollListener;
          this.local = 'item';
          this.ease = 0.1;
          this.targetY = 0;
          this.currentY = 0;
          this.previousY = 0;
          this.first = 0;
          this.previousFirst = 0;
          this.numberOfDomElements = 0;
        }

        _createClass(VirtualRepeat, [{
          key: 'bind',
          value: function bind(executionContext) {
            var _this = this;

            this.executionContext = executionContext;
            this.virtualScroll = this.element.parentElement.parentElement;
            this.virtualScroll.style.overflow = 'hidden';
            this.virtualScroll.tabIndex = '999';
            this.virtualScrollInner = this.element.parentElement;
            this.virtualScroll.addEventListener('touchmove', function (e) {
              e.preventDefault();
            });

            this.scrollListener.initialize(this.virtualScroll, function (deltaY) {
              _this.targetY += deltaY;
              _this.targetY = Math.max(-_this.scrollViewHeight, _this.targetY);
              _this.targetY = Math.min(0, _this.targetY);
              return _this.targetY;
            });

            var row = this.createFullExecutionContext(this.items[0], 0, 1);
            var view = this.viewFactory.create(row);
            this.viewSlot.add(view);
          }
        }, {
          key: 'unbind',
          value: function unbind() {
            this.scrollListener.dispose();
          }
        }, {
          key: 'attached',
          value: function attached() {
            var row, view;
            this.listItems = this.virtualScrollInner.children;
            this.itemHeight = VirtualRepeat.calcOuterHeight(this.listItems[0]);

            this.virtualScrollHeight = this.virtualScroll.getBoundingClientRect().height;
            this.numberOfDomElements = Math.ceil(this.virtualScrollHeight / this.itemHeight) + 1;

            for (var i = 1, ii = this.numberOfDomElements; i < ii; ++i) {
              row = this.createFullExecutionContext(this.items[i], i, ii);
              view = this.viewFactory.create(row);
              this.viewSlot.add(view);
              this.virtualScrollInner.children[i].style.display = i >= this.items.length - 1 ? 'none' : 'block';
            }

            this.calcScrollViewHeight();
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
                j,
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

            if (items.length < numberOfDomElements) {
              for (j = 0; j < numberOfDomElements; ++j) {
                this.virtualScrollInner.children[j].style.display = j >= items.length - 1 ? 'none' : 'block';
              }
            }

            this.calcScrollViewHeight();
          }
        }, {
          key: 'calcScrollViewHeight',
          value: function calcScrollViewHeight() {
            this.scrollViewHeight = this.items.length * this.itemHeight - this.virtualScrollHeight;
          }
        }], [{
          key: 'calcOuterHeight',
          value: function calcOuterHeight(element) {
            var height, style;
            height = element.getBoundingClientRect().height;
            style = element.currentStyle || window.getComputedStyle(element);
            height += parseInt(style.marginTop);
            height += parseInt(style.marginBottom);
            return height;
          }
        }]);

        var _VirtualRepeat = VirtualRepeat;
        VirtualRepeat = customAttribute('virtual-repeat')(VirtualRepeat) || VirtualRepeat;
        VirtualRepeat = bindable('items')(VirtualRepeat) || VirtualRepeat;
        VirtualRepeat = bindable('local')(VirtualRepeat) || VirtualRepeat;
        VirtualRepeat = templateController(VirtualRepeat) || VirtualRepeat;
        VirtualRepeat = inject(Element, BoundViewFactory, ViewSlot, ObserverLocator, ScrollListener)(VirtualRepeat) || VirtualRepeat;
        return VirtualRepeat;
      })();

      _export('VirtualRepeat', VirtualRepeat);
    }
  };
});