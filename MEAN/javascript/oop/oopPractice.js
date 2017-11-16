// var Todd = {
//     name: "Todd",
//     sayName: function() {
//         console.log("Todd");
//     },
// }

// Todd.sayName();

// function NewPerson(name) {
//     return {
//        name: name,
//     sayName: function() {
//         console.log(name);
//     }, 
//     }
// }

// var Jay = NewPerson("Jay");
// var Sarah = NewPerson("Sarah");
// Jay.sayName();
// Sarah.sayName();

// function Person(name) {
//     this.name = name;
//     this.sayName = function() {
//         console.log(name);
//     }
// }

// var Jimmy = new Person("Jimmy");
// Jimmy.sayName();

// function NinjaConstructor(name, age,prevOccupation) {
//     var ninja = {};
//     ninja.name = name;
//     ninja.age = age;
//     ninja.prevOccupation = prevOccupation;
//     ninja.introduce = function() {
//         console.log("Hi, my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " but now I'm a ninja!");
//     }
//     return ninja;
// }

// var Andrew = NinjaConstructor("Andrew", 24, "Teacher");
// Andrew.introduce();
// var Michael = NinjaConstructor("Michael", 34, "Founder");
// Michael.introduce = function() {
//     console.log("I am the founder!");
// }
// Michael.introduce();

function Car(make,model) {
    let odometer = 0;
    this.make= make;
    this.model = model;
    function updateOdometer(distance) {
        odometer += distance;
    }
    this.readOdometer = function() {
        return odometer;
    }
    this.drive = function(distance) {
        updateOdometer(distance);
        return this;
    }
}

const myCarInstance = new Car("Chevy","Camaro");
myCarInstance.drive(50).drive(90);
console.log(myCarInstance.odometer);
console.log(myCarInstance.readOdometer());