System.register(["aurelia-metadata", "aurelia-binding"], function (_export) {
  var ResourceType, EventManager, _createClass, _inherits, _classCallCheck, ElementConfig;

  return {
    setters: [function (_aureliaMetadata) {
      ResourceType = _aureliaMetadata.ResourceType;
    }, function (_aureliaBinding) {
      EventManager = _aureliaBinding.EventManager;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ElementConfig = _export("ElementConfig", (function (_ResourceType) {
        function ElementConfig() {
          _classCallCheck(this, ElementConfig);

          if (_ResourceType != null) {
            _ResourceType.apply(this, arguments);
          }
        }

        _inherits(ElementConfig, _ResourceType);

        _createClass(ElementConfig, {
          load: {
            value: function load(container, target) {
              var config = new target(),
                  eventManager = container.get(EventManager);

              eventManager.registerElementConfig(config);
            }
          },
          register: {
            value: function register() {}
          }
        });

        return ElementConfig;
      })(ResourceType));
    }
  };
});