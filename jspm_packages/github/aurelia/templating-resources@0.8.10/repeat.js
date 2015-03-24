System.register(["aurelia-binding", "aurelia-templating"], function (_export) {
  var ObserverLocator, calcSplices, getChangeRecords, Behavior, BoundViewFactory, ViewSlot, _createClass, _classCallCheck, Repeat;

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

      Repeat = _export("Repeat", (function () {
        function Repeat(viewFactory, viewSlot, observerLocator) {
          _classCallCheck(this, Repeat);

          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.observerLocator = observerLocator;
          this.local = "item";
          this.key = "key";
          this.value = "value";
        }

        _createClass(Repeat, {
          bind: {
            value: function bind(executionContext) {
              var _this = this;

              var items = this.items;

              this.executionContext = executionContext;

              if (!items) {
                if (this.oldItems) {
                  this.viewSlot.removeAll();
                }

                return;
              }

              if (this.oldItems === items) {
                if (items instanceof Map) {
                  var records = getChangeRecords(items);
                  var observer = this.observerLocator.getMapObserver(items);

                  this.handleMapChangeRecords(items, records);

                  this.disposeSubscription = observer.subscribe(function (records) {
                    _this.handleMapChangeRecords(items, records);
                  });
                } else {
                  var splices = calcSplices(items, 0, items.length, this.lastBoundItems, 0, this.lastBoundItems.length);
                  var observer = this.observerLocator.getArrayObserver(items);

                  this.handleSplices(items, splices);
                  this.lastBoundItems = this.oldItems = null;

                  this.disposeSubscription = observer.subscribe(function (splices) {
                    _this.handleSplices(items, splices);
                  });
                }
              } else {
                this.processItems();
              }
            }
          },
          unbind: {
            value: function unbind() {
              this.oldItems = this.items;

              if (this.items instanceof Array) {
                this.lastBoundItems = this.items.slice(0);
              }

              if (this.disposeSubscription) {
                this.disposeSubscription();
                this.disposeSubscription = null;
              }
            }
          },
          itemsChanged: {
            value: function itemsChanged() {
              this.processItems();
            }
          },
          processItems: {
            value: function processItems() {
              var items = this.items,
                  viewSlot = this.viewSlot;

              if (this.disposeSubscription) {
                this.disposeSubscription();
                viewSlot.removeAll();
              }

              if (!items) {
                return;
              }

              if (items instanceof Map) {
                this.processMapEntries(items);
              } else {
                this.processArrayItems(items);
              }
            }
          },
          processArrayItems: {
            value: function processArrayItems(items) {
              var _this = this;

              var viewFactory = this.viewFactory,
                  viewSlot = this.viewSlot,
                  i,
                  ii,
                  row,
                  view,
                  observer;

              observer = this.observerLocator.getArrayObserver(items);

              for (i = 0, ii = items.length; i < ii; ++i) {
                row = this.createFullExecutionContext(items[i], i, ii);
                view = viewFactory.create(row);
                viewSlot.add(view);
              }

              this.disposeSubscription = observer.subscribe(function (splices) {
                _this.handleSplices(items, splices);
              });
            }
          },
          processMapEntries: {
            value: function processMapEntries(items) {
              var _this = this;

              var viewFactory = this.viewFactory,
                  viewSlot = this.viewSlot,
                  index = 0,
                  row,
                  view,
                  observer;

              observer = this.observerLocator.getMapObserver(items);

              items.forEach(function (value, key) {
                row = _this.createFullExecutionKvpContext(key, value, index, items.size);
                view = viewFactory.create(row);
                viewSlot.add(view);
                ++index;
              });

              this.disposeSubscription = observer.subscribe(function (record) {
                _this.handleMapChangeRecords(items, record);
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
          createBaseExecutionKvpContext: {
            value: function createBaseExecutionKvpContext(key, value) {
              var context = {};
              context[this.key] = key;
              context[this.value] = value;
              return context;
            }
          },
          createFullExecutionContext: {
            value: function createFullExecutionContext(data, index, length) {
              var context = this.createBaseExecutionContext(data);
              return this.updateExecutionContext(context, index, length);
            }
          },
          createFullExecutionKvpContext: {
            value: function createFullExecutionKvpContext(key, value, index, length) {
              var context = this.createBaseExecutionKvpContext(key, value);
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
          handleSplices: {
            value: function handleSplices(array, splices) {
              var viewLookup = new Map(),
                  removeDelta = 0,
                  arrayLength = array.length,
                  viewSlot = this.viewSlot,
                  viewFactory = this.viewFactory,
                  i,
                  ii,
                  j,
                  jj,
                  splice,
                  removed,
                  addIndex,
                  end,
                  model,
                  view,
                  children,
                  length,
                  row;

              //TODO: track which views are moved instead of removed better
              //TODO: only update context after highest changed index

              for (i = 0, ii = splices.length; i < ii; ++i) {
                splice = splices[i];
                removed = splice.removed;

                for (j = 0, jj = removed.length; j < jj; ++j) {
                  model = removed[j];
                  view = viewSlot.removeAt(splice.index + removeDelta);

                  if (view) {
                    viewLookup.set(model, view);
                  }
                }

                removeDelta -= splice.addedCount;
              }

              for (i = 0, ii = splices.length; i < ii; ++i) {
                splice = splices[i];
                addIndex = splice.index;
                end = splice.index + splice.addedCount;

                for (; addIndex < end; ++addIndex) {
                  model = array[addIndex];
                  view = viewLookup.get(model);

                  if (view) {
                    viewLookup["delete"](model);
                    viewSlot.insert(addIndex, view); //TODO: move
                  } else {
                    row = this.createBaseExecutionContext(model);
                    view = this.viewFactory.create(row);
                    viewSlot.insert(addIndex, view);
                  }
                }
              }

              children = viewSlot.children;
              length = children.length;

              for (i = 0; i < length; i++) {
                this.updateExecutionContext(children[i].executionContext, i, length);
              }

              viewLookup.forEach(function (x) {
                return x.unbind();
              });
            }
          },
          handleMapChangeRecords: {
            value: function handleMapChangeRecords(map, records) {
              var viewSlot = this.viewSlot,
                  key,
                  i,
                  ii,
                  view,
                  children,
                  length,
                  row,
                  removeIndex,
                  record;

              for (i = 0, ii = records.length; i < ii; ++i) {
                record = records[i];
                key = record.key;
                switch (record.type) {
                  case "update":
                    removeIndex = this.getViewIndexByKey(key);
                    viewSlot.removeAt(removeIndex);
                    row = this.createBaseExecutionKvpContext(key, map.get(key));
                    view = this.viewFactory.create(row);
                    viewSlot.insert(removeIndex, view);
                    break;
                  case "add":
                    row = this.createBaseExecutionKvpContext(key, map.get(key));
                    view = this.viewFactory.create(row);
                    viewSlot.insert(map.size, view);
                    break;
                  case "delete":
                    if (!record.oldValue) {
                      return;
                    }
                    removeIndex = this.getViewIndexByKey(key);
                    viewSlot.removeAt(removeIndex);
                    break;
                  case "clear":
                    viewSlot.removeAll();
                }
              }

              children = viewSlot.children;
              length = children.length;

              for (i = 0; i < length; i++) {
                this.updateExecutionContext(children[i].executionContext, i, length);
              }
            }
          },
          getViewIndexByKey: {
            value: function getViewIndexByKey(key) {
              var viewSlot = this.viewSlot,
                  i,
                  ii,
                  child;

              for (i = 0, ii = viewSlot.children.length; i < ii; ++i) {
                // TODO (martingust) better way to get index?
                child = viewSlot.children[i];
                if (child.bindings[0].source[this.key] === key) {
                  return i;
                }
              }
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.templateController("repeat").withProperty("items", "itemsChanged", "repeat").withProperty("local").withProperty("key").withProperty("value");
            }
          },
          inject: {
            value: function inject() {
              return [BoundViewFactory, ViewSlot, ObserverLocator];
            }
          }
        });

        return Repeat;
      })());
    }
  };
});