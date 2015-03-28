System.register(["aurelia-templating"], function (_export) {
  var Behavior, _createClass, _classCallCheck, Show;

  function addStyleString(str) {
    var node = document.createElement("style");
    node.innerHTML = str;
    node.type = "text/css";
    document.head.appendChild(node);
  }

  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      addStyleString(".aurelia-hide { display:none !important; }");

      Show = _export("Show", (function () {
        function Show(element) {
          _classCallCheck(this, Show);

          this.element = element;
        }

        _createClass(Show, {
          valueChanged: {
            value: function valueChanged(newValue) {
              if (newValue) {
                this.element.classList.remove("aurelia-hide");
              } else {
                this.element.classList.add("aurelia-hide");
              }
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("show").withProperty("value", "valueChanged", "show");
            }
          },
          inject: {
            value: function inject() {
              return [Element];
            }
          }
        });

        return Show;
      })());
    }
  };
});