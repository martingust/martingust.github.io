System.register(["aurelia-templating"], function (_export) {
  var Behavior, _createClass, _classCallCheck, InnerHTML;

  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      InnerHTML = _export("InnerHTML", (function () {
        function InnerHTML(element) {
          _classCallCheck(this, InnerHTML);

          this.element = element;
          this.sanitizer = InnerHTML.defaultSanitizer;
        }

        _createClass(InnerHTML, {
          bind: {
            value: function bind() {
              this.setElementInnerHTML(this.value);
            }
          },
          valueChanged: {
            value: function valueChanged(newValue) {
              this.setElementInnerHTML(newValue);
            }
          },
          setElementInnerHTML: {
            value: function setElementInnerHTML(text) {
              text = this.sanitizer(text);
              this.element.innerHTML = text;
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("inner-html").withOptions().and(function (x) {
                x.withProperty("value", "valueChanged");
                x.withProperty("sanitizer");
              });
            }
          },
          defaultSanitizer: {
            value: function defaultSanitizer(text) {
              var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

              while (SCRIPT_REGEX.test(text)) {
                text = text.replace(SCRIPT_REGEX, "");
              }

              return text;
            }
          },
          inject: {
            value: function inject() {
              return [Element];
            }
          }
        });

        return InnerHTML;
      })());
    }
  };
});