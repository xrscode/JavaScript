'use strict'

//An Array:
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'Teacher',
    ['Michael', 'Peter', 'Steven']
] ;

//An Object:
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
} ;

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


const interestedIn = prompt('What do you want to know about Jonas?  Choose between firstName, lastName, age, job and friends.');


if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends.') ;
}