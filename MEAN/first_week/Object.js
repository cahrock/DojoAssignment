var person = {
    name : "Jason Bourne",
    sayName : function(){
        console.log(name);
    }
}

function NamePerson(name){
    return {
        name: name,
        sayName: function(){
            console.log(name);
        }
    }
}

var Jay = new NamePerson('Jay');
Jay.sayName();

function Person(name){
    this.name = name;
    this.sayName = function(){
        console.log(name);
    }
}

var jimmy = new Person('JImmy');
jimmy.sayName();
