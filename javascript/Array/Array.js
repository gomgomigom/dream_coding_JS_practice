"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍑", "🍍", "🍎"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[3]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("🥝", "🍉");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("🍈");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.splice(2, 1);
console.log(fruits);
fruits.splice(1, 1, "🍈", "🍇");
console.log(fruits);

// combine two arrays
const fruits2 = ["🥥", "🍉"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf("🥝"));
console.log(fruits.indexOf("🍍"));

// includes
console.log(fruits.includes("🥝"));
console.log(fruits.includes("🍍"));

// lastIndexOf
fruits.push("🥝");
console.log(fruits);
console.log(fruits.indexOf("🥝"));
console.log(fruits.lastIndexOf("🥝"));

// exercise
console.log(fruits.toString());
console.log(fruits.toLocaleString());
console.log(fruits.pop());
console.log(fruits.push("🙄"));
console.log(fruits.concat(fruits2));
console.log(fruits.concat(fruits2 | fruits));
console.log(fruits.reverse());

console.log(fruits);
