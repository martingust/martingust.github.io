System.register([], function (_export) {
  var _createClass, _classCallCheck, BindingLanguage;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      BindingLanguage = _export("BindingLanguage", (function () {
        function BindingLanguage() {
          _classCallCheck(this, BindingLanguage);
        }

        _createClass(BindingLanguage, {
          inspectAttribute: {
            value: function inspectAttribute(resources, attrName, attrValue) {
              throw new Error("A BindingLanguage must implement inspectAttribute(...)");
            }
          },
          createAttributeInstruction: {
            value: function createAttributeInstruction(resources, element, info, existingInstruction) {
              throw new Error("A BindingLanguage must implement createAttributeInstruction(...)");
            }
          },
          parseText: {
            value: function parseText(resources, value) {
              throw new Error("A BindingLanguage must implement parseText(...)");
            }
          }
        });

        return BindingLanguage;
      })());
    }
  };
});