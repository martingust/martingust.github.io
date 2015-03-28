System.register(["aurelia-templating"], function (_export) {
  var Behavior, BoundViewFactory, ViewSlot, _createClass, _classCallCheck, If;

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

      If = _export("If", (function () {
        function If(viewFactory, viewSlot) {
          _classCallCheck(this, If);

          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.showing = false;
        }

        _createClass(If, {
          valueChanged: {
            value: function valueChanged(newValue) {
              if (!newValue) {
                if (this.view) {
                  this.viewSlot.remove(this.view);
                  this.view.unbind();
                }

                this.showing = false;
                return;
              }

              if (!this.view) {
                this.view = this.viewFactory.create();
              }

              if (!this.showing) {
                this.showing = true;

                if (!this.view.bound) {
                  this.view.bind();
                }

                this.viewSlot.add(this.view);
              }
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.templateController("if").withProperty("value", "valueChanged", "if");
            }
          },
          inject: {
            value: function inject() {
              return [BoundViewFactory, ViewSlot];
            }
          }
        });

        return If;
      })());
    }
  };
});