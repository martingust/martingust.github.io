System.register(['aurelia-templating', 'aurelia-dependency-injection'], function (_export) {
  var customAttribute, inject, afterAttachedSetFocusDelay, Focus;

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      'use strict';

      afterAttachedSetFocusDelay = 50;

      Focus = (function () {
        function Focus(element) {
          var _this = this;

          _classCallCheck(this, _Focus);

          this.element = element;

          this.focusListener = function (e) {
            return _this.value = true;
          };
          this.blurListener = function (e) {
            return _this.value = false;
          };
        }

        var _Focus = Focus;

        _Focus.prototype.valueChanged = function valueChanged(newValue) {
          if (newValue) {
            this.element.focus();
          } else {
            this.element.blur();
          }
        };

        _Focus.prototype.attached = function attached() {
          var _this2 = this;

          this.element.addEventListener('focus', this.focusListener);
          this.element.addEventListener('blur', this.blurListener);

          if (this.value) {
            setTimeout(function () {
              return _this2.element.focus();
            }, afterAttachedSetFocusDelay);
          }
        };

        _Focus.prototype.detached = function detached() {
          this.element.removeEventListener('focus', this.focusListener);
          this.element.removeEventListener('blur', this.blurListener);
        };

        Focus = inject(Element)(Focus) || Focus;
        Focus = customAttribute('focus')(Focus) || Focus;
        return Focus;
      })();

      _export('Focus', Focus);
    }
  };
});