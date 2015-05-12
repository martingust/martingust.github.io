System.register(['aurelia-dependency-injection', 'aurelia-templating'], function (_export) {
  var inject, customAttribute, Show;

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    node.type = 'text/css';
    document.head.appendChild(node);
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }],
    execute: function () {
      'use strict';

      addStyleString('.aurelia-hide { display:none !important; }');

      Show = (function () {
        function Show(element) {
          _classCallCheck(this, _Show);

          this.element = element;
        }

        var _Show = Show;

        _Show.prototype.valueChanged = function valueChanged(newValue) {
          if (newValue) {
            this.element.classList.remove('aurelia-hide');
          } else {
            this.element.classList.add('aurelia-hide');
          }
        };

        Show = inject(Element)(Show) || Show;
        Show = customAttribute('show')(Show) || Show;
        return Show;
      })();

      _export('Show', Show);
    }
  };
});