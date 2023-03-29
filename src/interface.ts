interface IPerson{
    readonly name: string
    age: number

    greet(phrase: string):void 
}

interface IPilot{
    flyMessage() :void
}

class Pilot implements IPerson, IPilot{
    constructor(public readonly name: string, public age: number){
        this.checkAge()
    }

    private checkAge(){
        if(this.age < 28){
            throw new Error('Pilot is too young')     
        }
    }

    public greet(phrase: string): void {
        console.log(phrase + this.name );
    }

    public flyMessage() {
        console.log('Plane is rolling up, ');
    }
}

abstract class Plane{ 
    protected pilot?: IPilot

    public sitInCabin(pilot: IPilot){
        this.pilot = pilot
    }

    public abstract startEngine(): boolean
    
}

class Boeing extends Plane {
    public startEngine() {
        if(!this.pilot){
            throw new Error('Pilot is not in cabine')
        }

        console.log('start  engines');
        this.pilot.flyMessage()
        return true
        
    }
}

const boeing = new Boeing()
const pilot = new Pilot('Nick', 33)


pilot.greet("I'm captain of plane, greetings ")
boeing.sitInCabin(pilot)
boeing.startEngine()


// user = {
//     name: "max",
//     age: 30,
//     gender: 'male',

//     greet(phrase: string){
//         console.log(phrase + this.name + " he is "+ this.gender);
        
//     }
// }

// user.greet('Hello ')