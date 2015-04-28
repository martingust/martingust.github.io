System.register(['aurelia-framework'], function (_export) {
  var bindable, _classCallCheck, _createDecoratedClass, NavBar;

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      NavBar = (function () {
        var _instanceInitializers = {};

        function NavBar() {
          _classCallCheck(this, NavBar);

          this.router = _instanceInitializers.router.call(this);
          this.selectableValue = _instanceInitializers.selectableValue.call(this);
        }

        _createDecoratedClass(NavBar, [{
          key: 'router',
          enumerable: true,
          decorators: [bindable],
          initializer: function () {
            return null;
          }
        }, {
          key: 'selectableValue',
          enumerable: true,
          decorators: [bindable],
          initializer: function () {
            return null;
          }
        }, {
          key: 'activate',
          value: function activate() {}
        }, {
          key: 'attached',
          value: function attached() {
            alert(this.selectableValue);
          }
        }], null, _instanceInitializers);

        return NavBar;
      })();

      _export('NavBar', NavBar);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijt3REFFYSxNQUFNOzs7O21DQUZYLFFBQVE7Ozs7Ozs7OztBQUVILFlBQU07OztpQkFBTixNQUFNO2dDQUFOLE1BQU07O2VBQ1AsTUFBTSx5QkFBTixNQUFNO2VBQ04sZUFBZSx5QkFBZixlQUFlOzs7OEJBRmQsTUFBTTs7O3VCQUNoQixRQUFROzttQkFBVSxJQUFJOzs7Ozt1QkFDdEIsUUFBUTs7bUJBQW1CLElBQUk7Ozs7aUJBQ3hCLG9CQUFFLEVBRVQ7OztpQkFDTyxvQkFBRTtBQUNSLGlCQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1dBQzdCOzs7ZUFSVSxNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJuYXYtYmFyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=