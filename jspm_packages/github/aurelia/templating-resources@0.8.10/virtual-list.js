System.register(["aurelia-templating"], function (_export) {
  var Behavior, _createClass, _classCallCheck, VirtualList;

  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      VirtualList = _export("VirtualList", (function () {
        function VirtualList() {
          _classCallCheck(this, VirtualList);
        }

        _createClass(VirtualList, {
          speak: {
            value: function speak() {
              alert(this.list);
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("virtual-list").useView("virtual-list.html").withProperty("list");
            }
          }
        });

        return VirtualList;
      })());
    }
  };
});