function NinjaConstructor(name, prevOccupation) {
  this.name = name;
  this.prevOccupation = prevOccupation;
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
}
var dylan = new NinjaConstructor('Dylan', 'Construction Worker');
console.log(this)
//after var dylan ... add:
// var nikki = NinjaConstructor('Nikki','Historian');

// The code below can prevent the problems caused by not using new on a constructor (use it inside the constructor function):

// if (!(this instanceof NinjaConstructor)) {
//    // the constructor was called without "new".
//    return new NinjaConstructor(name, prevOccupation);
//  }
