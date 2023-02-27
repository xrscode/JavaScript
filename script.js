'use strict'

//for loop keeps running while condition is TRUE.
// for (let rep = 1; rep <= 20; rep++) {
//     console.log(`Print this statement multiple times. Repetition number: ${rep}.`) ;
// } ; 



// //Array
// const jonas = [
//     'Jonas',                       //Position 0
//     'Schmedtmann',                 //Position 1
//     2037 - 1991,                   //Position 2
//     'teacher',                    // Position 3
//     ['Michael', 'Peter', 'Steven'] //Position 4
// ] ;

// // for (let i = jonas.length - 1; i >= 0; i-- ){
// //     console.log(i, jonas[i]);
// // } ;

// for (let exercise = 1; exercise <= 3; exercise++){
//     console.log(`Starting Exercise ${exercise}.`) ;

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight rep number: ${rep}.`) ;
//     }
// };










// // for (let i = 0; i < jonas.length ; i++) {
// //     if(typeof jonas[i] === 'number') break;
    
// //     console.log(jonas[i], typeof jonas[i])
// // } ;
    


// //     //types[i] = typeof jonas[i];
// //     types.push(typeof jonas[i]);
// // };

// // console.log(types);

// // const years = [1991, 2007, 1969, 2020];
// // const ages = [];

// // for (let i = 0; i < years.length; i++ ) {
// //     ages.push(2023 - years[i]);
// // };

// // console.log(ages);

// // // Continue & Break Statements

// 

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'Teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ];

// for (let i = jonas.length -1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// };

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(``);

//     for (let rep = 10; rep >= 0; rep--){
    
//     };
// } ;

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
};

let dice = Math.trunc(Math.random() * 6) + 1;
    
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}.`) ;
// } ;