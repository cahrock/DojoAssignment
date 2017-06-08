var sum = 0;
function sumA(a){
    for(var i = 0; i< a.length; i++){
        sum += a[i]
    }
    return sum;
}
var x = [10,20,30,40];
console.log(sumA(x));

function minA(a){
    var min = 0;
    for( var i = 0; i < a.length; i++){
        if(a[i] < min){
            min = a[i];
        }
    }
    return min
}
var x = [1, 5, 90, 25, -3, 0];
console.log(minA(x));

function avgA(a){
    var sum = 0;
    var avg = 0;
    for( var i = 0; i < a.length; i++){
        sum += a[i];
        avg = sum / a.length
    }
    return avg
}
var x = [1, 5, 90, 25, -3, 0];
console.log(avgA(x));

// Function as variable
var sumA = function(a){
    for(var i = 0; i< a.length; i++){
        sum += a[i]
    }
    return sum;
}
var x = [10,20,30,40];
console.log(sumA(x));

var minA = function(a){
    var min = 0;
    for( var i = 0; i < a.length; i++){
        if(a[i] < min){
            min = a[i];
        }
    }
    return min
}
var x = [1, 5, 90, 25, -3, 0];
console.log(minA(x));


var avgA = function(a){
    var sum = 0;
    var avg = 0;
    for( var i = 0; i < a.length; i++){
        sum += a[i];
        avg = sum / a.length
    }
    return avg
}
var x = [1, 5, 90, 25, -3, 0];
console.log(avgA(x));


// Function as method of an object

var myObject = {
    sumC : function(a){
                for(var i = 0; i< a.length; i++){
                    sum += a[i]
                }
                return sum;
            },
    minA : function(a){
                var min = 0;
                for( var i = 0; i < a.length; i++){
                    if(a[i] < min){
                        min = a[i];
                    }
                }
                return min
            },
    avgA : function(a){
                var sum = 0;
                var avg = 0;
                for( var i = 0; i < a.length; i++){
                    sum += a[i];
                    avg = sum / a.length
                }
                return avg
            },
}

var z = [10,20,30,40];
console.log(myObject.sumC(z));

var y = [1, 5, 90, 25, -3, 0];
console.log(myObject.avgA(y));

var x = [1, 5, 90, 25, -3, 0];
console.log(myObject.minA(x));

var person = {
    name : "Jason Bourne",
    distance_traveled : 0,
    say_name : function(){
                alert('Hi Jason Bourne');
            },
    say_something : function(a){
                 return this.name + " " + a;
            },
    walk : function(){
                return this.distance_traveled + 3;
                // return this.name + " " + "is walking" + " " + (this.distance_traveled + 3)
            },
    run : function(){
                return (this.walk() + 10)
            },
    crawl : function(){
        return (this.run() + 1)
    }
}

console.log(person.name);
console.log(person.say_something("wazzaaa"));
console.log(person.name + " is walking " + person.walk())
console.log(person.name + " is running " + person.run())
console.log(person.name + " is crawling " + person.crawl())
