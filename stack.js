function Stack() {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.count++;
    this.storage[this.count] = value;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    var result = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return result;
  };

  this.size = function () {
    return this.count;
  };

  this.peek = function () {
    return this.storage[this.count];
  };
}

//   var myStack=new Stack();
//   myStack.push(100);
//   myStack.push(50);
//   console.log(myStack.size());
//   console.log(myStack.peek());
//   myStack.pop();
//   console.log(myStack.size());
//   console.log(myStack.peek());

// push pop size peek
