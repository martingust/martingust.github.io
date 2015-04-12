System.register([], function (_export) {
  var _classCallCheck, _createClass, PhoneList;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      PhoneList = (function () {
        function PhoneList() {
          _classCallCheck(this, PhoneList);

          this.objectArray = [];
          this.numberOfItems = 20;
        }

        _createClass(PhoneList, [{
          key: "activate",
          value: function activate() {
            for (var i = 0; i < this.numberOfItems; ++i) {
              this.objectArray.push({
                name: faker.name.findName(),
                image: faker.image.avatar(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                country: faker.address.country()
              });
            }
          }
        }, {
          key: "addItems",
          value: function addItems(count) {
            for (var i = 0; i < count; ++i) {
              this.objectArray.push({
                name: faker.name.findName(),
                image: faker.image.avatar(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                country: faker.address.country()
              });
            }
          }
        }, {
          key: "addItem2",
          value: function addItem2() {
            var item = {
              name: faker.name.findName(),
              image: faker.image.avatar(),
              email: faker.internet.email(),
              phone: faker.phone.phoneNumber(),
              country: faker.address.country()
            };
            this.objectArray.splice(1, 0, item);
          }
        }, {
          key: "addItem",
          value: function addItem() {
            this.objectArray.push({
              name: faker.name.findName(),
              image: faker.image.avatar(),
              email: faker.internet.email(),
              phone: faker.phone.phoneNumber(),
              country: faker.address.country()
            });
          }
        }, {
          key: "addItemFirst",
          value: function addItemFirst() {
            this.objectArray.unshift({
              name: faker.name.findName(),
              image: faker.image.avatar(),
              email: faker.internet.email(),
              phone: faker.phone.phoneNumber(),
              country: faker.address.country()
            });
          }
        }, {
          key: "removeItems",
          value: function removeItems(count) {
            this.objectArray.splice(0, count);
          }
        }, {
          key: "unshift5",
          value: function unshift5() {
            this.objectArray.unshift({
              name: faker.name.findName(),
              image: faker.image.avatar(),
              email: faker.internet.email(),
              phone: faker.phone.phoneNumber(),
              country: faker.address.country()
            }, {
              name: faker.name.findName(),
              image: faker.image.avatar(),
              email: faker.internet.email(),
              phone: faker.phone.phoneNumber(),
              country: faker.address.country()
            }, {
              name: faker.name.findName(),
              image: faker.image.avatar(),
              email: faker.internet.email(),
              phone: faker.phone.phoneNumber(),
              country: faker.address.country()
            }, {
              name: faker.name.findName(),
              image: faker.image.avatar(),
              email: faker.internet.email(),
              phone: faker.phone.phoneNumber(),
              country: faker.address.country()
            }, {
              name: faker.name.findName(),
              image: faker.image.avatar(),
              email: faker.internet.email(),
              phone: faker.phone.phoneNumber(),
              country: faker.address.country()
            });
          }
        }]);

        return PhoneList;
      })();

      _export("PhoneList", PhoneList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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