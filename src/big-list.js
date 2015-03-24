export class BigList{

   constructor() {
    this.items = [];
    this.repeatItems = [];
    this.numberOfItems = 1000000;
    this.numberOfRepeatItems = 1000;
  }

  activate(){
    // Randomly create a bunch of test data.
    var tlds = ['.com', '.net', '.org', '.edu', '.co.uk', '.io'];
    var domains = ['google', 'facebook', 'yahoo', 'apple', 'youtube', 'amazon', 'aurelia'];
    var firstNames = ['Shuhel', 'Ashley', 'Mike', 'Matthew', 'Rob', 'Jeremy', 'Martin', 'Patrick', 'Scott', 'Timothy', 'Vildan', 'Scott'];
    var lastNames = ['Ahmed', 'Grant', 'Graham', 'James', 'Eisenberg', 'Van der Haegen', 'Danyow', 'Gustafsson', 'Walters', 'Criswell', 'Moran', 'Softic', 'Allan'];
    var items = [];

    var item = '';
    for (var i = 0; i < this.numberOfItems; ++i) {
      item = `${i} ${this.randPick(firstNames)} ${this.randPick(lastNames)}`;
      this.items.push(item);
      if(i <= this.numberOfRepeatItems){
        this.repeatItems.push(item);
      }
    }
  }

  randRange(low, high) {
    return Math.floor(Math.random() * (high - low)) + low;
  }

  randPick(array) {
    return array[this.randRange(0, array.length)];
  }
}
