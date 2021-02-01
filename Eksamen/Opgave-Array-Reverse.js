// Opgaven fra Mandag d. 25/1 2021.

class Array {

  constructor (array) {
    this.array = array;
  }

  reverse() {
    let result = [];
    for (let i = this.array.length-1; i >= 0; i--) {
      result.push(this.array[i]);
      console.log(result);
    }
    return result;
  }

}

let array = new Array([1, 2, 3, 4]);
array.array = array.reverse();
console.log(array);
