System.register(['aurelia-dependency-injection', 'aurelia-binding', 'aurelia-templating', 'iscroll'], function (_export) {
  var inject, ObserverLocator, calcSplices, getChangeRecords, BoundViewFactory, ViewSlot, customAttribute, bindable, templateController, IScroll, VirtualScroll;

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
    }, function (_iscroll) {
      IScroll = _iscroll['default'];
    }],
    execute: function () {
      'use strict';

      VirtualScroll = (function () {
        function VirtualScroll(element, viewFactory, viewSlot, observerLocator) {
          _classCallCheck(this, _VirtualScroll);

          this.element = element;
          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.observerLocator = observerLocator;
          this.myScroll = {};
          this.numberOfDomElements = 30;
        }

        var _VirtualScroll = VirtualScroll;

        _VirtualScroll.prototype.bind = function bind(executionContext) {
          var row, view;

          this.executionContext = executionContext;
          this.virtualScrollInner = this.element.parentElement.parentElement;
          this.virtualScroll = this.virtualScrollInner.parentElement;

          for (var i = 1, ii = this.numberOfDomElements; i < ii; ++i) {
            row = this.createFullExecutionContext(this.items[i], i, ii);
            view = this.viewFactory.create(row);
            this.viewSlot.add(view);
          }

          this.virtualScroll.addEventListener('touchmove', function (e) {
            e.preventDefault();
          });
        };

        _VirtualScroll.prototype.unbind = function unbind() {};

        _VirtualScroll.prototype.attached = function attached() {
          this.myScroll = new IScroll(this.virtualScroll, {
            mouseWheel: true,
            infiniteElements: '#scroller .row',
            infiniteLimit: 2000,
            dataset: this.requestData,
            dataFiller: this.updateContent,
            cacheSize: 1000
          });
        };

        _VirtualScroll.prototype.requestData = function requestData(start, count) {
          var test = 1;
        };

        _VirtualScroll.prototype.updateContent = function updateContent(el, data) {
          el.innerHTML = data;
        };

        _VirtualScroll.prototype.createBaseExecutionContext = function createBaseExecutionContext(data) {
          var context = {};
          context[this.local] = data;
          return context;
        };

        _VirtualScroll.prototype.createFullExecutionContext = function createFullExecutionContext(data, index, length) {
          var context = this.createBaseExecutionContext(data);
          return this.updateExecutionContext(context, index, length);
        };

        _VirtualScroll.prototype.updateExecutionContext = function updateExecutionContext(context, index, length) {
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

        _VirtualScroll.prototype.handleSplices = function handleSplices(items, splices) {
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
        };

        VirtualScroll = inject(Element, BoundViewFactory, ViewSlot, ObserverLocator)(VirtualScroll) || VirtualScroll;
        VirtualScroll = templateController(VirtualScroll) || VirtualScroll;
        VirtualScroll = bindable('local')(VirtualScroll) || VirtualScroll;
        VirtualScroll = bindable('items')(VirtualScroll) || VirtualScroll;
        VirtualScroll = customAttribute('virtual-scroll')(VirtualScroll) || VirtualScroll;
        return VirtualScroll;
      })();

      _export('VirtualScroll', VirtualScroll);
    }
  };
});