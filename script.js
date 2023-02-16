'use strict'

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old, ${this.job}.  He has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`

    }
} ;

console.log(jonas.getSummary());