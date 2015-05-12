System.register(['aurelia-framework'], function (_export) {
  var computedFrom, bindable, inject, customAttribute, Welcome, UpperValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
    }],
    execute: function () {
      'use strict';

      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'John';
          this.lastName = 'Doe';
          this.names = ['Martin', 'Matilde', 'Alma', 'Ronny', 'Inga-Britt', 'Mats', 'Maria'];
          this.hasFocus = true;
        }

        _createClass(Welcome, [{
          key: 'fullName',
          get: function () {
            return '' + this.firstName + ' ' + this.lastName;
          }
        }, {
          key: 'activate',
          value: function activate() {
            this.hasFocus = true;
          }
        }, {
          key: 'welcome',
          value: function welcome() {
            this.names.push('Tessan');
          }
        }]);

        return Welcome;
      })();

      _export('Welcome', Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return value && value.toUpperCase();
          }
        }]);

        return UpperValueConverter;
      })();

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijt1REFFYSxPQUFPLEVBeUJQLG1CQUFtQjs7Ozs7Ozs7dUNBM0J4QixZQUFZO21DQUFFLFFBQVE7aUNBQUUsTUFBTTswQ0FBRSxlQUFlOzs7OztBQUUxQyxhQUFPO2lCQUFQLE9BQU87Z0NBQVAsT0FBTzs7ZUFDbEIsT0FBTyxHQUFHLHdDQUF3QztlQUNsRCxTQUFTLEdBQUcsTUFBTTtlQUNsQixRQUFRLEdBQUcsS0FBSztlQUNoQixLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7ZUFDN0UsUUFBUSxHQUFHLElBQUk7OztxQkFMSixPQUFPOztlQVdOLFlBQUU7QUFDWix3QkFBVSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUc7V0FDN0M7OztpQkFFTyxvQkFBRTtBQUNSLGdCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztXQUN0Qjs7O2lCQUVNLG1CQUFFO0FBQ0wsZ0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBRTdCOzs7ZUF0QlUsT0FBTzs7O3lCQUFQLE9BQU87O0FBeUJQLHlCQUFtQjtpQkFBbkIsbUJBQW1CO2dDQUFuQixtQkFBbUI7OztxQkFBbkIsbUJBQW1COztpQkFDeEIsZ0JBQUMsS0FBSyxFQUFDO0FBQ1gsbUJBQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztXQUNyQzs7O2VBSFUsbUJBQW1COzs7cUNBQW5CLG1CQUFtQiIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==