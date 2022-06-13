console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.

// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Matt',
  'Benal',
  'Nathalie',
  'Brandon',
  'Mario',
  'Tim',
  'Chris',
  'Lester',
  'TJ',
];
// Challenge 1 Code

for (let i = 0; i < students.length; i++) {
  console.log(students[i])
}


console.log("\n");
console.log("Challenge 2");
// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [95, 80, 120, 75, 83, 64];
//Challenge 2 Code

console.log(grades.reverse());



console.log("\n");
console.log("Challenge 3");
// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 19, 17, 4, 107, 1500];
// Challenge 3 Code
positiveNumbers.splice(2, 2)
positiveNumbers.shift()
for (let i = 0; i < positiveNumbers.length; i++) {
  // console.log(positiveNumbers)
  console.log(positiveNumbers[i])
}


console.log("\n");
console.log("Challenge 4");
// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 16, 11, -2, -3, -8, -93, 7];

// Challenge 4 Code
mixedSignNumbers.shift();
mixedSignNumbers.shift();
mixedSignNumbers.splice(2, 1)
mixedSignNumbers.splice(3, 1)
for (let i = 0; i < mixedSignNumbers.length; i++) {
  console.log(mixedSignNumbers[i])
}
// console.log(mixedSignNumbers)


console.log("\n");
console.log("Challenge 5");
// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
// Challenge 5 Code           x    x                                            x
symmetricalCapitals.shift();
symmetricalCapitals.shift();
symmetricalCapitals.pop();
for (let i = 0; i < symmetricalCapitals.length; i++) {
  console.log(symmetricalCapitals[i])
}
// console.log(symmetricalCapitals);

console.log("\n");
console.log("Challenge 6");
// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
// Challenge 6 Code
fibonacciNumbers.unshift(0);
fibonacciNumbers.push(21, 34);
for (let i = 0; i < fibonacciNumbers.length; i++) {
  console.log(fibonacciNumbers[i])
}
// console.log(fibonacciNumbers)


console.log("\n");
console.log("Challenge 7");
// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
// const newArray = [1, 2, 3, 4, 5];
// Challenge 7 Code
let newArray = [11, 22, 33, 44, 55]
for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i])
}



console.log("\n");
console.log("Challenge 8");
// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
const emptyArray = [];
// Challenge 8 Code
emptyArray.unshift("spoon", "echo", "golf", "tango");
emptyArray.push("Bryden")
for (let i = 0; i < emptyArray.length; i++) {
  console.log(emptyArray[i])
}


console.log("\n");
console.log("Challenge 9");
// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
// Challenge 9 Code

for (let i = 3; i < 11; i++) {
  console.log(students[i])
}

console.log("\n");
console.log("Challenge 10");
// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
// Do NOT use slice, you will be using that for the next challenge!
// Challenge 10 Code

let superStudents = [];

for (let i = 3; i < 11; i++) {
  console.log(students[i])
  superStudents.push(students[i])
}
console.log(superStudents);

console.log("\n");
console.log("Challenge 11");
// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
// Challenge 11 Code

let newStudents = students.slice(3, 11)
for (let i = 0; i < 8; i++) {
  console.log(newStudents[i])
}
console.log("\n");
for (let i = 0; i < students.length; i++) {
  console.log(students[i])
}

console.log("\n");
console.log("Challenge 12");
// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
// Challenge 12 Code

dinosaurs.splice(4, 3);
for (let i = 0; i < dinosaurs.length; i++) {
  console.log(dinosaurs[i])
}

console.log("\n");
console.log("Challenge 13");
// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
// Challenge 13 Code

console.log(dinosaurs.join("*"));




console.log("\n");

console.log("Challenge 14");
// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
// Challenge 14 Code

dinosaurs.reverse();
// console.log(dinosaurs);
for (let i = 0; i < dinosaurs.length; i++) {
  console.log(dinosaurs[i])
}


console.log("\n");
console.log("Challenge 15");
  // Challenge 15
  // Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  // Challenge 15 Code

let oneArray = ["brailee", "clayton"];
let twoArray = ["barb"];
let allArray = oneArray.concat(twoArray);
for (let i = 0; i < allArray.length; i++) {
  console.log(allArray[i])
  
}
console.log("\n");
  console.log(oneArray);
  console.log("\n");
  console.log(twoArray);