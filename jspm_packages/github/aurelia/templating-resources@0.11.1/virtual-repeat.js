System.register(['aurelia-dependency-injection', 'aurelia-binding', 'aurelia-templating', './scroll-handler'], function (_export) {
  var inject, ObserverLocator, calcSplices, getChangeRecords, BoundViewFactory, ViewSlot, customAttribute, bindable, templateController, ScrollHandler, VirtualRepeat;

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

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
    }, function (_scrollHandler) {
      ScrollHandler = _scrollHandler.ScrollHandler;
    }],
    execute: function () {
      'use strict';

      VirtualRepeat = (function () {
        function VirtualRepeat(element, viewFactory, viewSlot, observerLocator, scrollHandler) {
          _classCallCheck(this, _VirtualRepeat);

          this.element = element;
          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.observerLocator = observerLocator;
          this.scrollHandler = scrollHandler;
          this.local = 'item';
          this.ease = 1;
          this.targetY = 0;
          this.currentY = 0;
          this.previousY = 0;
          this.first = 0;
          this.previousFirst = 0;
          this.numberOfDomElements = 0;
          this.indicatorMinHeight = 15;
        }

        var _VirtualRepeat = VirtualRepeat;

        _VirtualRepeat.prototype.bind = function bind(executionContext) {
          var _this = this;

          this.executionContext = executionContext;
          this.virtualScrollInner = this.element.parentElement;
          this.virtualScroll = this.virtualScrollInner.parentElement;
          this.createScrollIndicator();
          this.virtualScroll.style.overflow = 'hidden';
          this.virtualScroll.tabIndex = '999';
          this.currentEase = this.ease;

          this.virtualScroll.addEventListener('touchmove', function (e) {
            e.preventDefault();
          });

          this.scrollHandler.initialize(this.virtualScroll, function (deltaY, ease) {
            console.log('ease', ease);
            if (ease) {
              _this.currentEase = ease;
            } else {
              _this.currentEase = _this.ease;
            }

            _this.targetY += deltaY;
            _this.targetY = Math.max(-_this.scrollViewHeight, _this.targetY);
            _this.targetY = Math.min(0, _this.targetY);
            return _this.targetY;
          });

          window.onresize = function () {
            _this.handleContainerResize();
          };

          var row = this.createFullExecutionContext(this.items[0], 0, 1);
          var view = this.viewFactory.create(row);
          this.viewSlot.add(view);
        };

        _VirtualRepeat.prototype.unbind = function unbind() {
          this.scrollHandler.dispose();
        };

        _VirtualRepeat.prototype.attached = function attached() {
          var _this2 = this;

          var items = this.items,
              observer,
              row,
              view;

          this.listItems = this.virtualScrollInner.children;
          this.itemHeight = VirtualRepeat.calcOuterHeight(this.listItems[0]);
          this.virtualScrollHeight = VirtualRepeat.calcScrollHeight(this.virtualScroll);
          this.numberOfDomElements = Math.ceil(this.virtualScrollHeight / this.itemHeight) + 1;

          for (var i = 1, ii = this.numberOfDomElements; i < ii; ++i) {
            row = this.createFullExecutionContext(this.items[i], i, ii);
            view = this.viewFactory.create(row);
            this.viewSlot.add(view);
          }

          this.calcScrollViewHeight();
          this.calcIndicatorHeight();

          observer = this.observerLocator.getArrayObserver(items);

          for (i = 0, ii = this.virtualScrollInner.children.length; i < ii; ++i) {
            var node = this.virtualScrollInner.children[i];
            node.className = node.className + ' ' + i;
          }

          this.disposeSubscription = observer.subscribe(function (splices) {
            _this2.handleSplices(items, splices);
          });

          this.scroll();
        };

        _VirtualRepeat.prototype.handleContainerResize = function handleContainerResize() {
          var children = this.viewSlot.children,
              childrenLength = children.length,
              row,
              view,
              addIndex;

          this.virtualScrollHeight = VirtualRepeat.calcScrollHeight(this.virtualScroll);
          this.numberOfDomElements = Math.ceil(this.virtualScrollHeight / this.itemHeight) + 1;

          if (this.numberOfDomElements > childrenLength) {
            addIndex = children[childrenLength - 1].executionContext.$index + 1;
            row = this.createFullExecutionContext(this.items[addIndex], addIndex, this.items.length);
            view = this.viewFactory.create(row);
            this.viewSlot.insert(childrenLength, view);
          } else if (this.numberOfDomElements < childrenLength) {
            this.numberOfDomElements = childrenLength;
          }

          this.calcScrollViewHeight();
        };

        _VirtualRepeat.prototype.scroll = function scroll() {
          var _this3 = this;

          var scrollView = this.virtualScrollInner,
              childNodes = scrollView.childNodes,
              itemHeight = this.itemHeight,
              items = this.items,
              viewSlot = this.viewSlot,
              numberOfDomElements = this.numberOfDomElements,
              element,
              viewStart,
              viewEnd,
              marginTop,
              translateStyle,
              view,
              first;

          this.currentY += (this.targetY - this.currentY) * this.currentEase;
          this.currentY = Math.round(this.currentY);

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

            viewStart = VirtualRepeat.getNthNode(childNodes, 1, 8);
            element = VirtualRepeat.getNthNode(childNodes, 1, 1);
            viewEnd = VirtualRepeat.getNthNode(childNodes, 2, 8);

            scrollView.insertBefore(viewEnd, scrollView.children[numberOfDomElements]);
            scrollView.insertBefore(element, viewEnd);
            scrollView.insertBefore(viewStart, element);

            marginTop = itemHeight * first + 'px';
            scrollView.style.marginTop = marginTop;
          } else if (first < this.previousFirst) {
            this.previousFirst = first;

            view = viewSlot.children[numberOfDomElements - 1];
            view.executionContext[this.local] = items[first];
            console.log('index', first);
            view.executionContext = this.updateExecutionContext(view.executionContext, first, items.length);
            viewSlot.children.unshift(viewSlot.children.splice(-1, 1)[0]);

            viewStart = VirtualRepeat.getNthNode(childNodes, 1, 8, true);
            element = VirtualRepeat.getNthNode(childNodes, 2, 1, true);
            viewEnd = VirtualRepeat.getNthNode(childNodes, 2, 8, true);

            scrollView.insertBefore(viewEnd, scrollView.childNodes[1]);
            scrollView.insertBefore(element, viewEnd);
            scrollView.insertBefore(viewStart, element);

            marginTop = itemHeight * first + 'px';
            scrollView.style.marginTop = marginTop;
          }

          translateStyle = 'translate3d(0px,' + this.currentY + 'px,0px)';
          this.virtualScrollInner.style.webkitTransform = translateStyle;
          this.virtualScrollInner.style.msTransform = translateStyle;
          this.virtualScrollInner.style.transform = translateStyle;

          this.scrollIndicator();

          requestAnimationFrame(function () {
            return _this3.scroll();
          });
        };

        _VirtualRepeat.prototype.scrollIndicator = function scrollIndicator() {
          var scrolledPercentage, indicatorTranslateStyle;

          scrolledPercentage = -this.currentY / (this.items.length * this.itemHeight - this.virtualScrollHeight);
          this.indicatorY = (this.virtualScrollHeight - this.indicatorHeight) * scrolledPercentage;

          indicatorTranslateStyle = 'translate3d(0px,' + this.indicatorY + 'px,0px)';
          this.indicator.style.webkitTransform = indicatorTranslateStyle;
          this.indicator.style.msTransform = indicatorTranslateStyle;
          this.indicator.style.transform = indicatorTranslateStyle;
        };

        _VirtualRepeat.prototype.createBaseExecutionContext = function createBaseExecutionContext(data) {
          var context = {};
          context[this.local] = data;
          return context;
        };

        _VirtualRepeat.prototype.createFullExecutionContext = function createFullExecutionContext(data, index, length) {
          var context = this.createBaseExecutionContext(data);
          return this.updateExecutionContext(context, index, length);
        };

        _VirtualRepeat.prototype.updateExecutionContext = function updateExecutionContext(context, index, length) {
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
        };

        _VirtualRepeat.prototype.handleSplices = function handleSplices(items, splices) {
          var numberOfDomElements = this.numberOfDomElements,
              viewSlot = this.viewSlot,
              first = this.first,
              totalAdded = 0,
              view,
              i,
              ii,
              j,
              marginTop,
              addIndex,
              splice,
              end,
              atBottom;
          this.items = items;

          for (i = 0, ii = viewSlot.children.length; i < ii; ++i) {
            view = viewSlot.children[i];
            view.executionContext[this.local] = items[this.first + i];
            view.executionContext = this.updateExecutionContext(view.executionContext, this.first + i, items.length);
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
            var limit = numberOfDomElements - (numberOfDomElements - items.length) - 1;
            for (j = 0; j < numberOfDomElements; ++j) {
              this.virtualScrollInner.children[j].style.display = j >= limit ? 'none' : 'block';
            }
          }

          this.calcScrollViewHeight();
          this.calcIndicatorHeight();
          this.scrollIndicator();
        };

        _VirtualRepeat.prototype.calcScrollViewHeight = function calcScrollViewHeight() {
          this.scrollViewHeight = this.items.length * this.itemHeight - this.virtualScrollHeight;
        };

        _VirtualRepeat.prototype.calcIndicatorHeight = function calcIndicatorHeight() {
          this.indicatorHeight = this.virtualScrollHeight * (this.virtualScrollHeight / this.scrollViewHeight);
          if (this.indicatorHeight < this.indicatorMinHeight) {
            this.indicatorHeight = this.indicatorMinHeight;
          }

          if (this.indicatorHeight >= this.scrollViewHeight) {
            this.indicator.style.visibility = 'hidden';
          } else {
            this.indicator.style.visibility = '';
          }

          this.indicator.style.height = this.indicatorHeight + 'px';
        };

        _VirtualRepeat.prototype.createScrollIndicator = function createScrollIndicator() {
          this.indicator = document.createElement('div');
          this.virtualScroll.appendChild(this.indicator);
          this.indicator.classList.add('au-scroll-indicator');
          this.indicator.style.backgroundColor = '#cccccc';
          this.indicator.style.top = '0px';
          this.indicator.style.right = '5px';
          this.indicator.style.width = '4px';
          this.indicator.style.position = 'absolute';
          this.indicator.style.opacity = '0.6';
        };

        _VirtualRepeat.getStyleValue = function getStyleValue(element, style) {
          var currentStyle, styleValue;
          currentStyle = element.currentStyle || window.getComputedStyle(element);
          styleValue = parseInt(currentStyle[style]);
          return Number.isNaN(styleValue) ? 0 : styleValue;
        };

        _VirtualRepeat.calcOuterHeight = function calcOuterHeight(element) {
          var height;
          height = element.getBoundingClientRect().height;
          height += VirtualRepeat.getStyleValue(element, 'marginTop');
          height += VirtualRepeat.getStyleValue(element, 'marginBottom');
          return height;
        };

        _VirtualRepeat.calcScrollHeight = function calcScrollHeight(element) {
          var height;
          height = element.getBoundingClientRect().height;
          height -= VirtualRepeat.getStyleValue(element, 'borderTopWidth');
          height -= VirtualRepeat.getStyleValue(element, 'borderBottomWidth');
          return height;
        };

        _VirtualRepeat.getNthNode = function getNthNode(nodes, n, nodeType, fromBottom) {
          var foundCount = 0,
              i = 0,
              found,
              node,
              lastIndex;

          lastIndex = nodes.length - 1;

          if (fromBottom) {
            i = lastIndex;
          }

          do {
            node = nodes[i];
            if (node.nodeType === nodeType) {
              ++foundCount;
              if (foundCount === n) {
                found = true;
              }
            }
            if (fromBottom) {
              --i;
            } else {
              ++i;
            }
          } while (!found || i === lastIndex || i === 0);

          return node;
        };

        VirtualRepeat = inject(Element, BoundViewFactory, ViewSlot, ObserverLocator, ScrollHandler)(VirtualRepeat) || VirtualRepeat;
        VirtualRepeat = templateController(VirtualRepeat) || VirtualRepeat;
        VirtualRepeat = bindable('local')(VirtualRepeat) || VirtualRepeat;
        VirtualRepeat = bindable('items')(VirtualRepeat) || VirtualRepeat;
        VirtualRepeat = customAttribute('virtual-repeat')(VirtualRepeat) || VirtualRepeat;
        return VirtualRepeat;
      })();

      _export('VirtualRepeat', VirtualRepeat);
    }
  };
});