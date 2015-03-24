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
          this.numberOfItems = 1000000;
          this.numberOfRepeatItems = 1000;
        }

        _createClass(BigList, {
          activate: {
            value: function activate() {
              // Randomly create a bunch of test data.
              var tlds = [".com", ".net", ".org", ".edu", ".co.uk", ".io"];
              var domains = ["google", "facebook", "yahoo", "apple", "youtube", "amazon", "aurelia"];
              var items = [];
              var item = "";
              for (var i = 0; i < this.numberOfItems; ++i) {
                item = "" + i + " " + this.randPick(domains) + " " + this.randPick(tlds);
                this.items.push(item);
                if (i <= this.numberOfRepeatItems) {
                  this.repeatItems.push(item);
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpZy1saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7cUNBQWEsT0FBTzs7Ozs7Ozs7Ozs7QUFBUCxhQUFPO0FBRU4saUJBRkQsT0FBTyxHQUVIO2dDQUZKLE9BQU87O0FBR2hCLGNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLGNBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO0FBQzdCLGNBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7U0FDakM7O3FCQVBVLE9BQU87QUFTbEIsa0JBQVE7bUJBQUEsb0JBQUU7O0FBRVIsa0JBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM3RCxrQkFBSSxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN2RixrQkFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2Ysa0JBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLG1CQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUMzQyxvQkFBSSxRQUFNLENBQUMsU0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEFBQUUsQ0FBQztBQUMvRCxvQkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEIsb0JBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBQztBQUMvQixzQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzdCO2VBQ0Y7YUFDRjs7QUFFRCxtQkFBUzttQkFBQSxtQkFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQ25CLHFCQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUEsQUFBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQ3ZEOztBQUVELGtCQUFRO21CQUFBLGtCQUFDLEtBQUssRUFBRTtBQUNkLHFCQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUMvQzs7OztlQTlCVSxPQUFPIiwiZmlsZSI6ImJpZy1saXN0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJpZ0xpc3R7XG5cbiAgIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLnJlcGVhdEl0ZW1zID0gW107XG4gICAgdGhpcy5udW1iZXJPZkl0ZW1zID0gMTAwMDAwMDtcbiAgICB0aGlzLm51bWJlck9mUmVwZWF0SXRlbXMgPSAxMDAwO1xuICB9XG5cbiAgYWN0aXZhdGUoKXtcbiAgICAvLyBSYW5kb21seSBjcmVhdGUgYSBidW5jaCBvZiB0ZXN0IGRhdGEuXG4gICAgdmFyIHRsZHMgPSBbJy5jb20nLCAnLm5ldCcsICcub3JnJywgJy5lZHUnLCAnLmNvLnVrJywgJy5pbyddO1xuICAgIHZhciBkb21haW5zID0gWydnb29nbGUnLCAnZmFjZWJvb2snLCAneWFob28nLCAnYXBwbGUnLCAneW91dHViZScsICdhbWF6b24nLCAnYXVyZWxpYSddO1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHZhciBpdGVtID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mSXRlbXM7ICsraSkge1xuICAgICAgaXRlbSA9IGAke2l9ICR7dGhpcy5yYW5kUGljayhkb21haW5zKX0gJHt0aGlzLnJhbmRQaWNrKHRsZHMpfWA7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICBpZihpIDw9IHRoaXMubnVtYmVyT2ZSZXBlYXRJdGVtcyl7XG4gICAgICAgIHRoaXMucmVwZWF0SXRlbXMucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByYW5kUmFuZ2UobG93LCBoaWdoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChoaWdoIC0gbG93KSkgKyBsb3c7XG4gIH1cblxuICByYW5kUGljayhhcnJheSkge1xuICAgIHJldHVybiBhcnJheVt0aGlzLnJhbmRSYW5nZSgwLCBhcnJheS5sZW5ndGgpXTtcbiAgfVxufVxuIl19