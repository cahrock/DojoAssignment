function personConstructor(name){
    var person = {
        name : name,
        distance_traveled : 0,
        say_name : function(){
                    console.log(alert("Hi "+ name));
                },
        say_something : function(a){
                    console.log(this.name + " says: " + a);
                },
        walk : function(){
                    console.log(this.name + " is walking " + (this.distance_traveled += 3));
                    return person;
                },
        run : function(){
                    console.log(this.name + " is running " + (this.distance_traveled += 10));
                    return person;
                },
        crawl : function(){
                    console.log(this.name + " is crawling " + (this.distance_traveled += 1));
                    return person;
                }
    }
    return person
}

// console.log(jsFundamentalThree('Jason Bourne'));
var b = 'Jason Bourne';
var newObject = new personConstructor(b);

newObject.say_something('I am cool');
newObject.walk().run()

function ninjaConstructor(name){
    var ninja = {
        name : name,
        cohort : 'Cohort-name',
        belt_level : 'Yellow-Belt',
        levelup : function(){
            console.log(ninja.name + " level is " + ninja.belt_level);
        }
    }
    return ninja;
}

var c = 'Michael Choi';
var newNinja = new ninjaConstructor(c);
console.log(newNinja.cohort);
newNinja.levelup();
// newNinja
