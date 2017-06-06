function VehicleConstructor(name,wheels,passengers,speed) {
    if (!(this instanceof VehicleConstructor)){
    }
    var self = this;
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;
    var distanceTravelled = 0;
    function updateDistanceTravelled() {
        distanceTravelled += self.speed;
        return this;
    }
    this.move = function() {
        updateDistanceTravelled();
        this.makeNoise();
        return this;
    }
    this.makeNoise = function() {
        console.log("VROOM!!!");
        return this;
    }
    this.checkMiles = function() {
        console.log(distanceTravelled);
        return this;
    }
}

var bike = new VehicleConstructor("Nashbar",2,1,25);
bike.makeNoise = function() {
    console.log("ring ring!");
}
console.log(bike.name,bike.wheels,bike.passengers);
bike.move().checkMiles();

var sedan = new VehicleConstructor("Protege",4,5,120);
sedan.makeNoise = function() {
    console.log("honk honk!");
}
console.log(sedan.name,sedan.wheels,sedan.passengers);
sedan.move().checkMiles();

var bus = new VehicleConstructor("MegaBus",10,1,75);
bus.addPassengers = function(fares) {
    bus.passengers += fares;
    return bus;
}
bus.move().checkMiles().addPassengers(35);
console.log(bus.name,bus.wheels,bus.passengers);
console.log(bike);