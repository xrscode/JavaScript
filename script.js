"use strict";
// Problem:
//We work for a company building a smart home thermomenter.  Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude.  Keep in mind that someitmes there might be a sensor error."

const temperatures = [
  3,
  -2,
  -6,
  -1,
  "error",
  9,
  1000,
  -101,
  13,
  17,
  15,
  14,
  9,
  5,
];
let numberArray = [];

for (let i = 0; i < temperatures.length; i++) {
  if (
    typeof temperatures[i] === "number" &&
    temperatures[i] <= 100 &&
    temperatures[i] >= -100
  ) {
    numberArray.push(temperatures[i]);
  } else {
    console.log(`These are the errors: ${temperatures[i]}`);
  }
}

numberArray.sort(function (a, b) {
  return a - b;
});

let amplitude = function () {
  let amp = numberArray[0] - numberArray[numberArray.length - 1];
  if (amp <= 0) {
    return amp * -1;
  } else {
    return amp;
  }
};

console.log(`The temperature amplitude is; ${amplitude()} degrees.`);

//1.  Understand the problem.
//First define temperature amplitude:  Temperature amplitude is the difference between the minimum and maximum temperature that ocurred within a specific recording time period.   So we need to consider creating a new array with ordered data.
//2. Breaking into sub-problems.
