System.register([], function (_export) {
  var _createClass, _classCallCheck, BigList;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      BigList = _export("BigList", (function () {
        function BigList() {
          _classCallCheck(this, BigList);

          this.items = [];
          this.repeatItems = [];
          this.objectArray = [];
          this.numberOfItems = 1000000;
          this.numberOfRepeatItems = 1000;
          console.log(this);
        }

        _createClass(BigList, {
          activate: {
            value: function activate() {
              var firstNames = ["Shuhel", "Ashley", "Mike", "Matthew", "Rob", "Jeremy", "Martin", "Patrick", "Scott", "Timothy", "Vildan", "Scott"];
              var lastNames = ["Ahmed", "Grant", "Graham", "James", "Eisenberg", "Van der Haegen", "Danyow", "Gustafsson", "Walters", "Criswell", "Moran", "Softic", "Allan"];

              var item = "";
              var firstName = "";
              var lastName = "";
              for (var i = 0; i < this.numberOfItems; ++i) {
                firstName = this.randPick(firstNames);
                lastName = this.randPick(lastNames);
                item = "" + i + " " + firstName + " " + lastName;
                this.items.push(item);
                if (i <= this.numberOfRepeatItems) {
                  this.repeatItems.push(item);
                }
                this.objectArray.push({ firstName: firstName, lastName: lastName });
              }
            }
          },
          randRange: {
            value: function randRange(low, high) {
              return Math.floor(Math.random() * (high - low)) + low;
            }
          },
          randPick: {
            value: function randPick(array) {
              return array[this.randRange(0, array.length)];
            }
          }
        });

        return BigList;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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