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
              var firstNames = ["Shuhel", "Ashley", "Mike", "Matthew", "Rob", "Jeremy", "Martin", "Patrick", "Scott", "Timothy", "Vildan", "Scott"];
              var lastNames = ["Ahmed", "Grant", "Graham", "James", "Eisenberg", "Van der Haegen", "Danyow", "Gustafsson", "Walters", "Criswell", "Moran", "Softic", "Allan"];
              var items = [];

              var item = "";
              for (var i = 0; i < this.numberOfItems; ++i) {
                item = "" + i + " " + this.randPick(firstNames) + " " + this.randPick(lastNames);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpZy1saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7cUNBQWEsT0FBTzs7Ozs7Ozs7Ozs7QUFBUCxhQUFPO0FBRU4saUJBRkQsT0FBTyxHQUVIO2dDQUZKLE9BQU87O0FBR2hCLGNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLGNBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO0FBQzdCLGNBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7U0FDakM7O3FCQVBVLE9BQU87QUFTbEIsa0JBQVE7bUJBQUEsb0JBQUU7O0FBRVIsa0JBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM3RCxrQkFBSSxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN2RixrQkFBSSxVQUFVLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RJLGtCQUFJLFNBQVMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDaEssa0JBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQzs7QUFFZixrQkFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsbUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQzNDLG9CQUFJLFFBQU0sQ0FBQyxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQUFBRSxDQUFDO0FBQ3ZFLG9CQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QixvQkFBRyxDQUFDLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFDO0FBQy9CLHNCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDN0I7ZUFDRjthQUNGOztBQUVELG1CQUFTO21CQUFBLG1CQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDbkIscUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQSxBQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDdkQ7O0FBRUQsa0JBQVE7bUJBQUEsa0JBQUMsS0FBSyxFQUFFO0FBQ2QscUJBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQy9DOzs7O2VBakNVLE9BQU8iLCJmaWxlIjoiYmlnLWxpc3QuanMiLCJzb3VyY2VSb290IjoiL3NyYy8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmlnTGlzdHtcblxuICAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMucmVwZWF0SXRlbXMgPSBbXTtcbiAgICB0aGlzLm51bWJlck9mSXRlbXMgPSAxMDAwMDAwO1xuICAgIHRoaXMubnVtYmVyT2ZSZXBlYXRJdGVtcyA9IDEwMDA7XG4gIH1cblxuICBhY3RpdmF0ZSgpe1xuICAgIC8vIFJhbmRvbWx5IGNyZWF0ZSBhIGJ1bmNoIG9mIHRlc3QgZGF0YS5cbiAgICB2YXIgdGxkcyA9IFsnLmNvbScsICcubmV0JywgJy5vcmcnLCAnLmVkdScsICcuY28udWsnLCAnLmlvJ107XG4gICAgdmFyIGRvbWFpbnMgPSBbJ2dvb2dsZScsICdmYWNlYm9vaycsICd5YWhvbycsICdhcHBsZScsICd5b3V0dWJlJywgJ2FtYXpvbicsICdhdXJlbGlhJ107XG4gICAgdmFyIGZpcnN0TmFtZXMgPSBbJ1NodWhlbCcsICdBc2hsZXknLCAnTWlrZScsICdNYXR0aGV3JywgJ1JvYicsICdKZXJlbXknLCAnTWFydGluJywgJ1BhdHJpY2snLCAnU2NvdHQnLCAnVGltb3RoeScsICdWaWxkYW4nLCAnU2NvdHQnXTtcbiAgICB2YXIgbGFzdE5hbWVzID0gWydBaG1lZCcsICdHcmFudCcsICdHcmFoYW0nLCAnSmFtZXMnLCAnRWlzZW5iZXJnJywgJ1ZhbiBkZXIgSGFlZ2VuJywgJ0RhbnlvdycsICdHdXN0YWZzc29uJywgJ1dhbHRlcnMnLCAnQ3Jpc3dlbGwnLCAnTW9yYW4nLCAnU29mdGljJywgJ0FsbGFuJ107XG4gICAgdmFyIGl0ZW1zID0gW107XG5cbiAgICB2YXIgaXRlbSA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZkl0ZW1zOyArK2kpIHtcbiAgICAgIGl0ZW0gPSBgJHtpfSAke3RoaXMucmFuZFBpY2soZmlyc3ROYW1lcyl9ICR7dGhpcy5yYW5kUGljayhsYXN0TmFtZXMpfWA7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICBpZihpIDw9IHRoaXMubnVtYmVyT2ZSZXBlYXRJdGVtcyl7XG4gICAgICAgIHRoaXMucmVwZWF0SXRlbXMucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByYW5kUmFuZ2UobG93LCBoaWdoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChoaWdoIC0gbG93KSkgKyBsb3c7XG4gIH1cblxuICByYW5kUGljayhhcnJheSkge1xuICAgIHJldHVybiBhcnJheVt0aGlzLnJhbmRSYW5nZSgwLCBhcnJheS5sZW5ndGgpXTtcbiAgfVxufVxuIl19