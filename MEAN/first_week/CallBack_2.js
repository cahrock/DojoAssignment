var a = 2;
var b = function() { console.log("something"); };

function doSomething(possibleCallback) {
  if (typeof(possibleCallback) === 'function'){
    console.log('possibleCallback is a callback!');
    possibleCallback(); //we can invoke the callback!
  }
  else {
    console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
  }
}
doSomething(function myCallback(){ console.log('yes, I am a callback!') });
doSomething('string');
// possibleCallback is a callback!
// yes, I am a callback!
// possibleCallback:  string  is not a callback function.
