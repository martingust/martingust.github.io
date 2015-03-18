export class BigList{

   constructor() {
    this.items = [];
  }

  activate(){
    // Randomly create a bunch of test data.
    var tlds = ['.com', '.net', '.org', '.edu', '.co.uk', '.io'];
    var domains = ['google', 'facebook', 'yahoo', 'apple', 'youtube', 'amazon', 'aurelia'];
    var items = [];
    for (var i = 0; i < 1000; ++i) {
      this.items.push(i + ' ' + this.randPick(domains) + this.randPick(tlds));
    }
  }

  randRange(low, high) {
    return Math.floor(Math.random() * (high - low)) + low;
  }

  randPick(array) {
    return array[this.randRange(0, array.length)];
  }
}
