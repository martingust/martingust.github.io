System.register(["aurelia-templating"], function (_export) {
  var Behavior, _createClass, _classCallCheck, SelectedItem;

  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      SelectedItem = _export("SelectedItem", (function () {
        function SelectedItem(element) {
          _classCallCheck(this, SelectedItem);

          this.element = element;
          this.options = [];
          this.callback = this.selectedIndexChanged.bind(this);
        }

        _createClass(SelectedItem, {
          bind: {
            value: function bind() {
              this.element.addEventListener("change", this.callback, false);
            }
          },
          unbind: {
            value: function unbind() {
              this.element.removeEventListener("change", this.callback);
            }
          },
          valueChanged: {
            value: function valueChanged(newValue) {
              this.optionsChanged();
            }
          },
          selectedIndexChanged: {
            value: function selectedIndexChanged() {
              var index = this.element.selectedIndex,
                  option = this.options[index];

              this.value = option ? option.model : null;
            }
          },
          optionsChanged: {
            value: function optionsChanged(mutations) {
              var value = this.value,
                  options = this.options,
                  option,
                  i,
                  ii;

              for (i = 0, ii = options.length; i < ii; ++i) {
                option = options[i];

                if (option.model === value) {
                  if (this.element.selectedIndex !== i) {
                    this.element.selectedIndex = i;
                  }

                  return;
                }
              }

              this.element.selectedIndex = 0;
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("selected-item").withProperty("value", "valueChanged", "selected-item").and(function (x) {
                return x.bindingIsTwoWay();
              }).syncChildren("options", "optionsChanged", "option");
            }
          },
          inject: {
            value: function inject() {
              return [Element];
            }
          }
        });

        return SelectedItem;
      })());
    }
  };
});