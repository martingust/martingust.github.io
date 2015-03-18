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
        }

        _createClass(BigList, {
          activate: {
            value: function activate() {
              // Randomly create a bunch of test data.
              var tlds = [".com", ".net", ".org", ".edu", ".co.uk", ".io"];
              var domains = ["google", "facebook", "yahoo", "apple", "youtube", "amazon", "aurelia"];
              var items = [];
              for (var i = 0; i < 1000; ++i) {
                this.items.push(i + " " + this.randPick(domains) + this.randPick(tlds));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpZy1saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7cUNBQWEsT0FBTzs7Ozs7Ozs7Ozs7QUFBUCxhQUFPO0FBRU4saUJBRkQsT0FBTyxHQUVIO2dDQUZKLE9BQU87O0FBR2hCLGNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2pCOztxQkFKVSxPQUFPO0FBTWxCLGtCQUFRO21CQUFBLG9CQUFFOztBQUVSLGtCQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDN0Qsa0JBQUksT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDdkYsa0JBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNmLG1CQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQzdCLG9CQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2VBQ3pFO2FBQ0Y7O0FBRUQsbUJBQVM7bUJBQUEsbUJBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUNuQixxQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFBLEFBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUN2RDs7QUFFRCxrQkFBUTttQkFBQSxrQkFBQyxLQUFLLEVBQUU7QUFDZCxxQkFBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDL0M7Ozs7ZUF0QlUsT0FBTyIsImZpbGUiOiJiaWctbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9