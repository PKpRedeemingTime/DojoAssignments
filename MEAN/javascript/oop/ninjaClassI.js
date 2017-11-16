function Ninja(name) {
    let speed = 3;
    let strength = 3;
    let health = 100;
    this.health = health;
    this.name = name;
    this.sayName = function() {
        console.log("My ninja name is "+name);
        return this;
    }
    this.showStats = function() {
        console.log("Name:",this.name,"Health:",this.health,"Speed:",speed,"Strength:",strength);
        return this;
    }
    this.drinkSake = function() {
        this.health+=10;
        return this;
    }
}

const patrick = new Ninja("Patrick");
patrick.sayName();
patrick.showStats();
patrick.drinkSake().showStats();