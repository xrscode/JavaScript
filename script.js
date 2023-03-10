"use strict";
// /* Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example: [17, 21, 23] will print "...17 degrees in 1 days, 21 degrees in 2 days, 23 degrees in 3 days..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// TEST DATA 1: [17, 21, 23];
// TEST DATA 2: [12, 5, -5, 0, 4];
// */
// let testData1 = [17, 21, 23];
// let testData2 = [12, 5, -5, 0, 4];

// //My Solution:
// const printForecast = function (arr) {
//   //Index Position.
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === 0) {
//       console.log(`Today the temperature is ${arr[i]} degrees.`);
//     } else if (arr.indexOf(arr[i]) === 1) {
//       console.log(`Tomorrow the temperature is ${arr[i]} degrees.`);
//     } else {
//       console.log(
//         `In ${arr.indexOf(arr[i])} days the temperature will be ${
//           arr[i]
//         } degrees.`
//       );
//     }
//   }
// };

// printForecast(testData1);
// printForecast(testData2);

// // //Instructor Solution
// // const printForecast = function (arr) {
// //   let str = ""; //Creates a String Variable.
// //   for (let i = 0; i < arr.length; i++) {
// //     str = str + `${arr[i]} degrees.  In ${i + 1} days ...`; //Adds to the string value as for loop iterates through the array.   i + 1 is the current array position plus 1.
// //   }
// //   console.log("..." + str);
// // };

// // printForecast(testData1);

// //Function that Checks if divided by 3 is integer
// let div3 = function (a) {
//   let num = a / 3;
//   if (Number.isInteger(num) === true) {
//     console.log("Divisible by 3.");
//   } else {
//     console.log("NOT divisible by 3.");
//   }
// };

// //Function that Checks if divided by 5 is integer
// let div5 = function (a) {
//   let num = a / 5;
//   if (Number.isInteger(num) === true) {
//     console.log("Divisible by 5.");
//   } else {
//     console.log("NOT divisible by 5.");
//   }
// };
// let mat = 15;
// div3(mat);
// div5(mat);

// //Do...While Loop to decrease number in increments.
// // let result = ''
// // let i = mat;
// // do {
// //   i = mat - 1;
// //   result = result - i;
// // } while (i > 0);
// // console.log(result)

// let div3Arr = [];
// let div5Arr = [];
// Sum Numbers
function sum(numbers) {
  let box = 0;
  for (let i = 0; i < numbers.length; i++) {
    box = box + numbers[i];
  }
  console.log(box);
}

sum([1, 5.2, 4, 0, 1], 9.2, 5);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);
console.log(points[0]);
