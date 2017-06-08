/* ********** Good OOP Practice **********
Now that you have learned about Prototype, consider adding the instance methods (those that don't need to access private variables!) by adding it to prototype. For example, if you were creating thousands of ninja objects, adding methods to their shared prototype would make your program run much faster.

But balancing prototype and readability should be considered if you are only creating a small number of instances.
/* ********** End **********  */

function Ninja(name){
  this.name = name;   // creating instance variables
  this.distance_traveled = 0;
}
// creating an instance method
Ninja.prototype.walk = function() {
    console.log(this.name + ' is walking');
    this.distance_traveled += 1;
    return this;      // have this method return its own object
  };
// creating an instance method
Ninja.prototype.run = function() {
    console.log(this.name + ' is running');
    this.distance_traveled += 5;
    this.displayDistanceTraveled();
    return this;      // have this method return its own object
  };
//another instance method
Ninja.prototype.displayDistanceTraveled = function() {
    console.log('distance traveled: ', this.distance_traveled);
}


// creating instances/objects
var ninja1 = new Ninja('Jay');
var ninja2 = new Ninja('Michael');
var ninja3 = new Ninja('Andrew');


ninja1.walk().run().walk().run().run();  // because walk/run returns itself, we can chain these methods


// you can also log ninja1 and study it
console.log(ninja1);
