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
          this.key = "key";
          this.value = "value";
          this.previous = 0;
          this.window = window;
        }

        _createClass(VirtualRepeat, {
          bind: {
            value: function bind(executionContext) {
              var items = this.items,
                  viewFactory = this.viewFactory,
                  viewSlot = this.viewSlot,
                  i,
                  ii,
                  row,
                  view;

              this.executionContext = executionContext;

              for (i = 0, ii = 10; i < ii; ++i) {
                row = this.createFullExecutionContext(items[i], i, ii);
                view = this.viewFactory.create(row);
                this.viewSlot.add(view);
              }

              this.list = this.element.parentElement.parentElement.parentElement;
              this.scrollView = this.element.parentElement.parentElement;

              this.update();

              return;
            }
          },
          update: {
            value: function update() {
              var _this = this;

              var items = this.items,
                  viewFactory = this.viewFactory,
                  viewSlot = this.viewSlot,
                  i,
                  row,
                  view;

              if (!this.listItems) {
                requestAnimationFrame(function () {
                  return _this.update();
                });
              }

              var current = this.scrollView.scrollTop;

              if (this.previous == current) {
                requestAnimationFrame(function () {
                  return _this.update();
                });
                return;
              }
              this.previous = current;
              var first = Math.ceil(current / this.itemHeight);
              for (i = 0; i < 10; ++i) {
                this.listItems[i].innerText = items[first++];
              }
              requestAnimationFrame(function () {
                return _this.update();
              });
            }
          },
          attached: {
            value: function attached() {
              var _this = this;

              this.listItems = this.element.parentElement.children;
              this.itemHeight = this.listItems[0].getBoundingClientRect().height;

              this.list.onmousewheel = function (e) {

                var delta = e.wheelDeltaY;
                if (Math.abs(delta) < _this.itemHeight) {
                  delta = _this.itemHeight * (delta > 0 ? 1 : -1);
                }
                _this.scrollView.scrollTop -= delta;
              };
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
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.templateController("virtual-repeat").withProperty("items", "itemsChanged", "virtual-repeat").withProperty("local").withProperty("key").withProperty("value");
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