System.register([], function (_export) {
  var PhoneList;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      "use strict";

      PhoneList = (function () {
        function PhoneList() {
          _classCallCheck(this, PhoneList);

          this.objectArray = [];
          this.numberOfItems = 100;
          this.isSelected = false;
        }

        _createClass(PhoneList, [{
          key: "setIsSelected",
          value: function setIsSelected() {
            this.isSelected = true;
          }
        }, {
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

            this.numberOfItems = this.objectArray.length;
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