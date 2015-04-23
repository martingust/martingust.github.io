System.register(['aurelia-framework'], function (_export) {
  var computedFrom, _classCallCheck, _createClass, Welcome, UpperValueConverter;

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'John';
          this.lastName = 'Doe';

          this.customers = new Map();
        }

        _createClass(Welcome, [{
          key: 'activate',
          value: function activate() {
            this.customers.set(1, { name: 'Martin' });
            this.customers.set(2, { name: 'Matilde' });
          }
        }, {
          key: 'fullName',
          get: function () {
            return '' + this.firstName + ' ' + this.lastName;
          }
        }, {
          key: 'welcome',
          value: function welcome() {
            alert('Welcome, ' + this.fullName + '!');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjttREFFYSxPQUFPLEVBMkJQLG1CQUFtQjs7Ozt1Q0E3QnhCLFlBQVk7Ozs7Ozs7OztBQUVQLGFBQU87QUFLUCxpQkFMQSxPQUFPLEdBS0w7Z0NBTEYsT0FBTzs7ZUFDbEIsT0FBTyxHQUFHLHdDQUF3QztlQUNsRCxTQUFTLEdBQUcsTUFBTTtlQUNsQixRQUFRLEdBQUcsS0FBSzs7QUFHZCxjQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7U0FDNUI7O3FCQVBVLE9BQU87O2lCQVNWLG9CQUFFO0FBQ1IsZ0JBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO0FBQ3hDLGdCQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztXQUMxQzs7O2VBTVcsWUFBRTtBQUNaLHdCQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBRztXQUM3Qzs7O2lCQUVNLG1CQUFFO0FBQ1AsaUJBQUssZUFBYSxJQUFJLENBQUMsUUFBUSxPQUFJLENBQUM7V0FDckM7OztlQXhCVSxPQUFPOzs7eUJBQVAsT0FBTzs7QUEyQlAseUJBQW1CO2lCQUFuQixtQkFBbUI7Z0NBQW5CLG1CQUFtQjs7O3FCQUFuQixtQkFBbUI7O2lCQUN4QixnQkFBQyxLQUFLLEVBQUM7QUFDWCxtQkFBTyxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1dBQ3JDOzs7ZUFIVSxtQkFBbUI7OztxQ0FBbkIsbUJBQW1CIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==