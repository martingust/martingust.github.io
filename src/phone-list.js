export class PhoneList{

   constructor() {
    this.objectArray = [];
    this.numberOfItems = 10000;
  }

  activate(){
    for (var i = 0; i < this.numberOfItems; ++i) {
      this.objectArray.push({
        name: `${i} ${faker.name.findName()}`,
        image: faker.image.avatar(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        country: faker.address.country()
        });
    }
  }
}
