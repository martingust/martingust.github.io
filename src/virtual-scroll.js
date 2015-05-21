export class PhoneList{

  constructor() {
    this.objectArray = [];
    this.numberOfItems = 100;
    this.isSelected = false;

  }

  setIsSelected(){
    this.isSelected = true;
  }

  activate(){
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

  addItems(count){
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

  addItem2(){
    var item = {
      name: faker.name.findName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      country: faker.address.country()
    };
    this.objectArray.splice(1, 0, item);
  }

  addItem(){
    this.objectArray.push({
      name: faker.name.findName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      country: faker.address.country()
    });
  }

  addItemFirst(){
    this.objectArray.unshift({
      name: faker.name.findName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      country: faker.address.country()
    });
  }

  removeItems(count){
    this.objectArray.splice(0, count);
  }

  unshift5(){
    this.objectArray.unshift({
      name: faker.name.findName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      country: faker.address.country()
    },{
      name: faker.name.findName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      country: faker.address.country()
    },{
      name: faker.name.findName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      country: faker.address.country()
    },{
      name: faker.name.findName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      country: faker.address.country()
    },{
      name: faker.name.findName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      country: faker.address.country()
    });
  }
}
