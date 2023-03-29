"use strict";
class Pilot {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.checkAge();
    }
    checkAge() {
        if (this.age < 28) {
            throw new Error('Pilot is too young');
        }
    }
    greet(phrase) {
        console.log(phrase + this.name);
    }
    flyMessage() {
        console.log('Plane is rolling up, ');
    }
}
class Plane {
    sitInCabin(pilot) {
        this.pilot = pilot;
    }
}
class Boeing extends Plane {
    startEngine() {
        if (!this.pilot) {
            throw new Error('Pilot is not in cabine');
        }
        console.log('start  engines');
        this.pilot.flyMessage();
        return true;
    }
}
const boeing = new Boeing();
const pilot = new Pilot('Nick', 33);
pilot.greet("I'm captain of plane, greetings ");
boeing.sitInCabin(pilot);
boeing.startEngine();
//# sourceMappingURL=interface.js.map