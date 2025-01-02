// Day 1

// Assignment 1, 2, 3 and 4

const ages = [21, 18, 15, 26];

let ageCheck = (age) =>
    age < 21 && age >= 18
        ? "You can drive, but not drink and vote!"
        : age >= 21
        ? "You can drive, vote and drink alcohol."
        : "You cannot drive, vote and drink alcohol.";

ages.map((val, ind) => console.log(`Test ${ind+1} You are ${val}: ${ageCheck(val)}`));

// Project - "Simple Calculator"

const calculator = (val1, op, val2) => eval(`${typeof val1 === "number" ? val1 : 0}${op}${typeof val2 === "number" ? val2 : 0}`);

console.log(
    calculator(20, "+", 22)
);
