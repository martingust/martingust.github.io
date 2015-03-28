export class BigList{

   constructor() {
    this.items = [];
    this.repeatItems = [];
    this.objectArray = [];
    this.numberOfItems = 1000000;
    this.numberOfRepeatItems = 1000;
    console.log(this);
  }

  activate(){
    var firstNames = ['Shuhel', 'Ashley', 'Mike', 'Matthew', 'Rob', 'Jeremy', 'Martin', 'Patrick', 'Scott', 'Timothy', 'Vildan', 'Scott'];
    var lastNames = ['Ahmed', 'Grant', 'Graham', 'James', 'Eisenberg', 'Van der Haegen', 'Danyow', 'Gustafsson', 'Walters', 'Criswell', 'Moran', 'Softic', 'Allan'];

    var item = '';
    var firstName = '';
    var lastName = '';
    for (var i = 0; i < this.numberOfItems; ++i) {
      firstName = this.randPick(firstNames);
      lastName = this.randPick(lastNames);
      item = `${i} ${firstName} ${lastName}`;
      this.items.push(item);
      if(i <= this.numberOfRepeatItems){
        this.repeatItems.push(item);
      }
      this.objectArray.push({ firstName: firstName, lastName: lastName });
    }
  }

  randRange(low, high) {
    return Math.floor(Math.random() * (high - low)) + low;
  }

  randPick(array) {
    return array[this.randRange(0, array.length)];
  }
}
