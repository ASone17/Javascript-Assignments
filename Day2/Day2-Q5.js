const vehicle= {
    vehicleid: 487,
    brand: 'Audi',
    model: 'Q7',
    variant: 'SUV',

     specifications:{
        firstGear: function(){
            console.log('vehicle is in the 1st gear');
        },

        secondGear: function(){
            console.log('vehicle is the 2nd gear');
        },

        maxSpeed: function(){
            console.log('current speed is 160');
        },

        changeGear: function(){
            this.firstGear();
            this.secondGear();
        },
     } ,
}

console.log(`The Vehicle brand is:  ${vehicle.brand}`);
console.log(`The Vehicle model is: ${vehicle.model}`);
console.log(`The Vehicle variant is: ${vehicle.variant}`);
vehicle.specifications.changeGear();
