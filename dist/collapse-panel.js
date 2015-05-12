System.register(["aurelia-framework"], function (_export) {
    var bindable, CollapsePanel;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
        }],
        execute: function () {
            "use strict";

            CollapsePanel = (function () {
                var _instanceInitializers = {};

                function CollapsePanel() {
                    _classCallCheck(this, CollapsePanel);

                    _defineDecoratedPropertyDescriptor(this, "heading", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "collapsed", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "badge", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "allowCollapse", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "panelClass", _instanceInitializers);
                }

                _createDecoratedClass(CollapsePanel, [{
                    key: "heading",
                    decorators: [bindable],
                    initializer: function () {
                        return "A panel...";
                    },
                    enumerable: true
                }, {
                    key: "collapsed",
                    decorators: [bindable],
                    initializer: function () {
                        return false;
                    },
                    enumerable: true
                }, {
                    key: "badge",
                    decorators: [bindable],
                    initializer: function () {
                        return "";
                    },
                    enumerable: true
                }, {
                    key: "allowCollapse",
                    decorators: [bindable],
                    initializer: function () {
                        return true;
                    },
                    enumerable: true
                }, {
                    key: "panelClass",
                    decorators: [bindable],
                    initializer: function () {
                        return "";
                    },
                    enumerable: true
                }, {
                    key: "toggleCollapse",
                    value: function toggleCollapse() {
                        if (this.allowCollapse) {
                            this.collapsed = !this.collapsed;
                        }
                    }
                }], null, _instanceInitializers);

                return CollapsePanel;
            })();

            _export("CollapsePanel", CollapsePanel);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxhcHNlLXBhbmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7a0JBRWEsYUFBYTs7Ozs7Ozs7Ozt5Q0FGbEIsUUFBUTs7Ozs7QUFFSCx5QkFBYTs7O0FBUVgseUJBUkYsYUFBYSxHQVFSOzBDQVJMLGFBQWE7Ozs7Ozs7Ozs7O2lCQVNyQjs7c0NBVFEsYUFBYTs7aUNBRXJCLFFBQVE7OytCQUFXLFlBQVk7Ozs7O2lDQUMvQixRQUFROzsrQkFBYSxLQUFLOzs7OztpQ0FDMUIsUUFBUTs7K0JBQVMsRUFBRTs7Ozs7aUNBQ25CLFFBQVE7OytCQUFpQixJQUFJOzs7OztpQ0FDN0IsUUFBUTs7K0JBQWMsRUFBRTs7Ozs7MkJBS1gsMEJBQUc7QUFDYiw0QkFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQ3BCLGdDQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzt5QkFDcEM7cUJBQ0o7Ozt1QkFmUSxhQUFhOzs7cUNBQWIsYUFBYSIsImZpbGUiOiJjb2xsYXBzZS1wYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=