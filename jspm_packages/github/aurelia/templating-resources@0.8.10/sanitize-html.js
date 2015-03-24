System.register(["aurelia-templating"], function (_export) {
  var Behavior, _createClass, _classCallCheck, SCRIPT_REGEX, SanitizeHtmlValueConverter;

  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
      SanitizeHtmlValueConverter = _export("SanitizeHtmlValueConverter", (function () {
        function SanitizeHtmlValueConverter() {
          _classCallCheck(this, SanitizeHtmlValueConverter);

          this.sanitizer = SanitizeHtmlValueConverter.defaultSanitizer;
        }

        _createClass(SanitizeHtmlValueConverter, {
          toView: {
            value: function toView(untrustedMarkup) {
              if (untrustedMarkup === null) {
                return null;
              }

              return this.sanitizer(untrustedMarkup);
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.valueConverter("sanitize-html");
            }
          },
          defaultSanitizer: {
            value: function defaultSanitizer(untrustedMarkup) {
              return untrustedMarkup.replace(SCRIPT_REGEX, "");
            }
          }
        });

        return SanitizeHtmlValueConverter;
      })());
    }
  };
});