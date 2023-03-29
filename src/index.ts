// class House {
//     private tenants: string[] = []

//     constructor(public readonly type: string, protected street: string){
//     }

//     public showAddress(this: House){
//         console.log("Address: " + this.street);  
//     }

//     public addTennant(tenant: string){
//         this.tenants.push(tenant)
//     }

//     public showTenants(){
//         console.log("Tenants of ", this.street);
        
//         this.tenants.map((tenant, index)=> {
//             console.log(`${index+1}: ${tenant} `);
            
//         })
//     }
// }

// class StoneHouse extends House {
    

//     constructor( street: string, private chargeInHouse: string){
//         super('stone', street)
//     }

//     public showAddress(): void{
//         console.log("Address: " + this.street);  
//     }

//     public showCharge(){
//         console.log(`Charge of , ${this.chargeInHouse}`);

//         super.showTenants()
        
//     }
// }

// const stoneHouse = new StoneHouse('LELEKA', "maxim")

// stoneHouse.addTennant('Nikita')
// stoneHouse.addTennant('Andrey')
// stoneHouse.addTennant('Gloub')


// stoneHouse.showCharge()

