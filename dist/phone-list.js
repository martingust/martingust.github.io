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
          this.numberOfItems = 20;
          this.isSelected = false;
        }

        _createClass(PhoneList, [{
          key: "setIsSelected",
          value: function setIsSelected() {
            this.isSelected = true;
          }
        }, {
          key: "createItem",
          value: function createItem() {
            var name = faker.name.findName();
            return {
              firstLetter: name.charAt(0),
              name: name,
              color: faker.internet.color(),
              phone: faker.phone.phoneNumber(),
              country: faker.address.country()
            };
          }
        }, {
          key: "activate",
          value: function activate() {
            var name;
            for (var i = 0; i < this.numberOfItems; ++i) {
              name = faker.name.findName();
              this.objectArray.push(this.createItem());
            }
          }
        }, {
          key: "addItems",
          value: function addItems(count) {
            for (var i = 0; i < count; ++i) {
              this.objectArray.push(this.createItem());
            }

            this.numberOfItems = this.objectArray.length;
          }
        }, {
          key: "addItem2",
          value: function addItem2() {
            var item = this.createItem();
            this.objectArray.splice(1, 0, item);
          }
        }, {
          key: "addItem",
          value: function addItem() {
            this.objectArray.push(this.createItem());
          }
        }, {
          key: "addItemFirst",
          value: function addItemFirst() {
            this.objectArray.unshift(this.createItem());
          }
        }, {
          key: "removeItems",
          value: function removeItems(count) {
            this.objectArray.splice(0, count);
          }
        }, {
          key: "unshift5",
          value: function unshift5() {
            this.objectArray.unshift(this.createItem(), this.createItem(), this.createItem(), this.createItem(), this.createItem());
          }
        }]);

        return PhoneList;
      })();

      _export("PhoneList", PhoneList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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