function VehicleConstructor(name, num_wheels, num_passengers){
    var vehicle = {};

    // property
    vehicle.name = name;
    vehicle.num_wheels = num_wheels;
    vehicle.num_passengers = num_passengers;

    // methods
    vehicle.attributeVehicle = function(){
        console.log('This is a type of vehicle : '+ vehicle.name + " ,it has " + vehicle.num_wheels + " wheels and could carry "+ vehicle.num_passengers + " passengers");
    }
    vehicle.makeNoise = function(){
        console.log(vehicle.name + " makes a noise,");
    }
    return vehicle;
}
// Bike
var aBike = new VehicleConstructor('bike', 2, 2);
aBike.attributeVehicle();
aBike.makeNoise();
aBike.makeNoise = function(){
    console.log("Ring-ring");
};
aBike.makeNoise();

// Sedan
var sedan = new VehicleConstructor('sedan', 4, 5);
sedan.attributeVehicle();
sedan.makeNoise();
sedan.makeNoise = function(){
    console.log("Honk-honk");
}
sedan.makeNoise();

// Bus
var bus = new VehicleConstructor('Bus', 6, 6);
bus.attributeVehicle();
bus.pickupCustomer = function(num_passengers){
    bus.num_passengers += num_passengers;
}
var passangers = bus.pickupCustomer(15);
console.log(passangers);
