'use strict'

//Mark Miller Object
const markMiller = {
    firstName: 'Mark',
    secondName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = (this.mass)/(this.height**2);
        return this.bmi;
    },
    markSummary: function() {
        return `${this.firstName} ${this.secondName} has a BMI value of ${this.calcBMI()}.`;
    },

};
markMiller.calcBMI();
console.log(markMiller.bmi);

console.log(markMiller.markSummary());


//John Smith Object
const johnSmith = {
    firstName: 'John',
    secondName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = (this.mass)/(this.height**2);
        return this.bmi;
    },
    johnSummary: function() {
        return `${this.firstName} ${this.secondName} has a BMI value of ${this.calcBMI()}.`
    },
    
};


console.log(johnSmith.johnSummary());

//if/else Higher BMI
if (markMiller.bmi > johnSmith.bmi) {
    console.log(`${markMiller.firstName} ${markMiller.secondName} has a BMI of ${markMiller.bmi}.  It is higher than Johns BMI which is only ${johnSmith.bmi}.`);
} else if (markMiller.bmi < johnSmith.bmi) {
    console.log(`${johnSmith.firstName} ${johnSmith.secondName} has a BMI of ${johnSmith.bmi}.  It is higher than Mark's BMI which is only ${markMiller.bmi}.`);
} else if (markMiller.bmi === johnSmith.bmi) {
    console.log('They both have the same BMI.');
} ;