function VehicleConstructor(name,wheels, passangers, speed){
    this.name = name;
    this.wheels = wheels;
    this.passangers = passangers;
    this.speed = speed;

    var distance_travelled = 0;
    var updateDistanceTravelled = function(){
        distance_traveled = this.speed;
    }
    this.attributeVehicle = function(){
        console.log('This is a type of vehicle : '+ this.name + " ,it has " + this.wheels + " wheels and could carry "+ this.passangers + " passengers" + " the speed now "+ this.speed + " mph");
    }
    this.makeNoise = function(){
        console.log(this.name + " makes a noise,");
    }
    this.move = function(){
        updateDistanceTravelled();
        // makeNoise();
    }
    this.checkMiles = function(){
        console.log(updateDistanceTravelled());
    }
}

var Sedan = new VehicleConstructor('Sedan', 4, 5, 25)
Sedan.attributeVehicle()
Sedan.makeNoise = function(){
    console.log("Ring-ring");
}
Sedan.makeNoise();
Sedan.move();
Sedan.checkMiles();
