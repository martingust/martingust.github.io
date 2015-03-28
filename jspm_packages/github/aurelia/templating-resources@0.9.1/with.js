System.register(["aurelia-templating"], function (_export) {
  var Behavior, BoundViewFactory, ViewSlot, _createClass, _classCallCheck, With;

  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      With = _export("With", (function () {
        function With(viewFactory, viewSlot) {
          _classCallCheck(this, With);

          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
        }

        _createClass(With, {
          valueChanged: {
            value: function valueChanged(newValue) {
              if (!this.view) {
                this.view = this.viewFactory.create(newValue);
                this.viewSlot.add(this.view);
              } else {
                this.view.bind(newValue);
              }
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.templateController("with").withProperty("value", "valueChanged", "with");
            }
          },
          inject: {
            value: function inject() {
              return [BoundViewFactory, ViewSlot];
            }
          }
        });

        return With;
      })());
    }
  };
});