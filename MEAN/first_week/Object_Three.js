function VehicleConstructor(name, wheels, passangers, speed){
    this.name = name;
    this.wheels = wheels;
    this.passangers = passangers;
    this.speed = speed;

    var distance_traveled = 0;
    var updateDistanceTravelled = function(){
        console.log("This is a private method");
    }

    this.attributeVehicle = function(){
        console.log('This is a type of vehicle : '+ this.name + " ,it has " + this.wheels + " wheels and could carry "+ this.passengers + " passengers");
    }

    this.makeNoise = function(){
        console.log(this.name + " makes a noise,");
    }

    this.vehicleSpeed = function(){
        console.log(this.speed);
        updateDistanceTravelled(this.speed);
        // console.log(this.);
    }
    this.checkMiles = function(){
        vehicleSpeed()
        console.log(updateDistanceTravelled());
    }
}
