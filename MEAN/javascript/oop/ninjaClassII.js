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
    this.punch = function(victim) {
        victim.health-=5;
        console.log(`${victim.name} was punched by ${this.name} and lost 5 health.`);
        return this;
    }
    this.kick = function(victim) {
        victim.health-=15*strength;
        console.log(`${victim.name} was kicked by ${this.name} and lost ${strength*15} health.`);

        return this;
    }
}

const patrick = new Ninja("Patrick");
const bj = new Ninja("BJ");
patrick.sayName();
patrick.showStats();
patrick.punch(bj);
bj.showStats();
bj.kick(patrick);
patrick.showStats();