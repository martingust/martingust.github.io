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
        }

        _createClass(BigList, {
          activate: {
            value: function activate() {
              // Randomly create a bunch of test data.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpZy1saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7cUNBQWEsT0FBTzs7Ozs7Ozs7Ozs7QUFBUCxhQUFPO0FBRU4saUJBRkQsT0FBTyxHQUVIO2dDQUZKLE9BQU87O0FBR2hCLGNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLGNBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLGNBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO0FBQzdCLGNBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7U0FDakM7O3FCQVJVLE9BQU87QUFVbEIsa0JBQVE7bUJBQUEsb0JBQUU7O0FBRVIsa0JBQUksVUFBVSxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0SSxrQkFBSSxTQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUVoSyxrQkFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2Qsa0JBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNuQixrQkFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLG1CQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUMzQyx5QkFBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEMsd0JBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLG9CQUFJLFFBQU0sQ0FBQyxTQUFJLFNBQVMsU0FBSSxRQUFRLEFBQUUsQ0FBQztBQUN2QyxvQkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEIsb0JBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBQztBQUMvQixzQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzdCO0FBQ0Qsb0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztlQUNyRTthQUNGOztBQUVELG1CQUFTO21CQUFBLG1CQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDbkIscUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQSxBQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDdkQ7O0FBRUQsa0JBQVE7bUJBQUEsa0JBQUMsS0FBSyxFQUFFO0FBQ2QscUJBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQy9DOzs7O2VBcENVLE9BQU8iLCJmaWxlIjoiYmlnLWxpc3QuanMiLCJzb3VyY2VSb290IjoiL3NyYy8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmlnTGlzdHtcblxuICAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMucmVwZWF0SXRlbXMgPSBbXTtcbiAgICB0aGlzLm9iamVjdEFycmF5ID0gW107XG4gICAgdGhpcy5udW1iZXJPZkl0ZW1zID0gMTAwMDAwMDtcbiAgICB0aGlzLm51bWJlck9mUmVwZWF0SXRlbXMgPSAxMDAwO1xuICB9XG5cbiAgYWN0aXZhdGUoKXtcbiAgICAvLyBSYW5kb21seSBjcmVhdGUgYSBidW5jaCBvZiB0ZXN0IGRhdGEuXG4gICAgdmFyIGZpcnN0TmFtZXMgPSBbJ1NodWhlbCcsICdBc2hsZXknLCAnTWlrZScsICdNYXR0aGV3JywgJ1JvYicsICdKZXJlbXknLCAnTWFydGluJywgJ1BhdHJpY2snLCAnU2NvdHQnLCAnVGltb3RoeScsICdWaWxkYW4nLCAnU2NvdHQnXTtcbiAgICB2YXIgbGFzdE5hbWVzID0gWydBaG1lZCcsICdHcmFudCcsICdHcmFoYW0nLCAnSmFtZXMnLCAnRWlzZW5iZXJnJywgJ1ZhbiBkZXIgSGFlZ2VuJywgJ0RhbnlvdycsICdHdXN0YWZzc29uJywgJ1dhbHRlcnMnLCAnQ3Jpc3dlbGwnLCAnTW9yYW4nLCAnU29mdGljJywgJ0FsbGFuJ107XG5cbiAgICB2YXIgaXRlbSA9ICcnO1xuICAgIHZhciBmaXJzdE5hbWUgPSAnJztcbiAgICB2YXIgbGFzdE5hbWUgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZJdGVtczsgKytpKSB7XG4gICAgICBmaXJzdE5hbWUgPSB0aGlzLnJhbmRQaWNrKGZpcnN0TmFtZXMpO1xuICAgICAgbGFzdE5hbWUgPSB0aGlzLnJhbmRQaWNrKGxhc3ROYW1lcyk7XG4gICAgICBpdGVtID0gYCR7aX0gJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YDtcbiAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgIGlmKGkgPD0gdGhpcy5udW1iZXJPZlJlcGVhdEl0ZW1zKXtcbiAgICAgICAgdGhpcy5yZXBlYXRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgICAgdGhpcy5vYmplY3RBcnJheS5wdXNoKHsgZmlyc3ROYW1lOiBmaXJzdE5hbWUsIGxhc3ROYW1lOiBsYXN0TmFtZSB9KTtcbiAgICB9XG4gIH1cblxuICByYW5kUmFuZ2UobG93LCBoaWdoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChoaWdoIC0gbG93KSkgKyBsb3c7XG4gIH1cblxuICByYW5kUGljayhhcnJheSkge1xuICAgIHJldHVybiBhcnJheVt0aGlzLnJhbmRSYW5nZSgwLCBhcnJheS5sZW5ndGgpXTtcbiAgfVxufVxuIl19