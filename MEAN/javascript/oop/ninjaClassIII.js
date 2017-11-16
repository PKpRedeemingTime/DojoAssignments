class Warrior {
    constructor(name) {
        let speed = 3;
        let strength = 3;
        let health = 100;
        this.health = health;
        this.strength = strength;
        this.speed = speed;
        this.name = name;
        this.sayName = function() {
            console.log("My ninja name is "+name);
            return this;
        }
        this.showStats = function() {
            console.log("Name:",this.name,"Health:",this.health,"Speed:",this.speed,"Strength:",this.strength);
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
            victim.health-=15*(this.strength);
            console.log(`${victim.name} was kicked by ${this.name} and lost ${this.strength*15} health.`);
            return this;
        }
    }
}

class Ninja extends Warrior {
    constructor(name) {
        super(name);
    }
}

class Sensei extends Warrior {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
    }
    speakWisdom() {
        this.drinkSake();
        console.log("I am very wise and this very worked.")
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
patrick.drinkSake().showStats();
const mike = new Sensei("Mike");
mike.sayName();
mike.showStats();
mike.speakWisdom().showStats();
mike.kick(bj);
bj.showStats();
