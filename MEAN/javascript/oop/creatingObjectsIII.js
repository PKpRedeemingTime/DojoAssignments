function VehicleConstructor(name,wheels,passengers,speed) {
    if (!(this instanceof VehicleConstructor)){
    }
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;
    this.distanceTravelled = 0;
    this.VIN = Math.floor((Math.random() * 100000000000) + 1);
}
VehicleConstructor.prototype.move = function() {
    this.updateDistanceTravelled();
    this.makeNoise();
    return this;
}
VehicleConstructor.prototype.makeNoise = function() {
    console.log("VROOM!!!");
    return this;
}
VehicleConstructor.prototype.checkMiles = function() {
    console.log(this.distanceTravelled);
    return this;
}
VehicleConstructor.prototype.updateDistanceTravelled = function() {
    this.distanceTravelled += this.speed;
    return this;
}

var bike = new VehicleConstructor("Nashbar",2,1,25);
bike.makeNoise = function() {
    console.log("ring ring!");
}
console.log(bike.name,bike.wheels,bike.passengers,bike.VIN);
bike.move().checkMiles();

var sedan = new VehicleConstructor("Protege",4,5,120);
sedan.makeNoise = function() {
    console.log("honk honk!");
}
console.log(sedan.name,sedan.wheels,sedan.passengers,sedan.VIN);
sedan.move().checkMiles();

var bus = new VehicleConstructor("MegaBus",10,1,75);
bus.addPassengers = function(fares) {
    bus.passengers += fares;
    return bus;
}
bus.move().checkMiles().addPassengers(35);
console.log(bus.name,bus.wheels,bus.passengers,bus.VIN);
console.log(bike);