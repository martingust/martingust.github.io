System.register([], function (_export) {
  var _createClass, _classCallCheck, PhoneList;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      PhoneList = _export("PhoneList", (function () {
        function PhoneList() {
          _classCallCheck(this, PhoneList);

          this.objectArray = [];
          this.numberOfItems = 1000000;
        }

        _createClass(PhoneList, {
          activate: {
            value: function activate() {
              for (var i = 0; i < this.numberOfItems; ++i) {
                this.objectArray.push({
                  name: "" + i + " " + faker.name.findName(),
                  image: faker.image.avatar(),
                  email: faker.internet.email(),
                  phone: faker.phone.phoneNumber(),
                  country: faker.address.country()
                });
              }
            }
          }
        });

        return PhoneList;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lLWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtxQ0FBYSxTQUFTOzs7Ozs7Ozs7OztBQUFULGVBQVM7QUFFUixpQkFGRCxTQUFTLEdBRUw7Z0NBRkosU0FBUzs7QUFHbEIsY0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDdEIsY0FBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7U0FDMUI7O3FCQUxVLFNBQVM7QUFPcEIsa0JBQVE7bUJBQUEsb0JBQUU7QUFDUixtQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDM0Msb0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0FBQ3BCLHNCQUFJLE9BQUssQ0FBQyxTQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEFBQUU7QUFDckMsdUJBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUMzQix1QkFBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO0FBQzdCLHVCQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7QUFDaEMseUJBQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtpQkFDL0IsQ0FBQyxDQUFDO2VBQ047YUFDRjs7OztlQWpCVSxTQUFTIiwiZmlsZSI6InBob25lLWxpc3QuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==