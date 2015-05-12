System.register(['aurelia-binding'], function (_export) {
  var valueConverter, SCRIPT_REGEX, SanitizeHtmlValueConverter;

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  return {
    setters: [function (_aureliaBinding) {
      valueConverter = _aureliaBinding.valueConverter;
    }],
    execute: function () {
      'use strict';

      SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

      SanitizeHtmlValueConverter = (function () {
        function SanitizeHtmlValueConverter() {
          _classCallCheck(this, _SanitizeHtmlValueConverter);

          this.sanitizer = SanitizeHtmlValueConverter.defaultSanitizer;
        }

        var _SanitizeHtmlValueConverter = SanitizeHtmlValueConverter;

        _SanitizeHtmlValueConverter.defaultSanitizer = function defaultSanitizer(untrustedMarkup) {
          return untrustedMarkup.replace(SCRIPT_REGEX, '');
        };

        _SanitizeHtmlValueConverter.prototype.toView = function toView(untrustedMarkup) {
          if (untrustedMarkup === null) {
            return null;
          }

          return this.sanitizer(untrustedMarkup);
        };

        SanitizeHtmlValueConverter = valueConverter('sanitizeHtml')(SanitizeHtmlValueConverter) || SanitizeHtmlValueConverter;
        return SanitizeHtmlValueConverter;
      })();

      _export('SanitizeHtmlValueConverter', SanitizeHtmlValueConverter);
    }
  };
});