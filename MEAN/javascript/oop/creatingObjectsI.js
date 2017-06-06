function VehicleConstructor(name,wheels,passengers) {
    var vehicle = {};
    vehicle.name = name;
    vehicle.wheels = wheels;
    vehicle.passengers = passengers;
    vehicle.makeNoise = function() {
        console.log("VROOM!!!")
        return vehicle;
    }
    return vehicle;
}

var Bike = VehicleConstructor("Nashbar",2,1);
Bike.makeNoise = function() {
    console.log("ring ring!");
    return Bike;
}
console.log(Bike.name,Bike.wheels,Bike.passengers);
Bike.makeNoise();

var Sedan = VehicleConstructor("Protege",4,5);
Sedan.makeNoise = function() {
    console.log("honk honk!");
    return Sedan;
}
console.log(Sedan.name,Sedan.wheels,Sedan.passengers);
Sedan.makeNoise();

var Bus = VehicleConstructor("MegaBus",10,1);
Bus.addPassengers = function(fares) {
    Bus.passengers += fares;
    return Bus;
}
Bus.makeNoise();
Bus.addPassengers(35)
console.log(Bus.name,Bus.wheels,Bus.passengers);