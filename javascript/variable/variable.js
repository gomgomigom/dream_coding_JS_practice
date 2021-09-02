// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
"use strict";
// 2. Variable
// let (added in ES6)
let globalnames = "global names";
let names = "hey";

{
  let names = "ellie";
  console.log(names);
  names = "hello";
  console.log(names);
}

console.log(names);
console.log(globalnames);
