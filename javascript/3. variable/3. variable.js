// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';
// 2. Variable, rw(read,write)
// let (added in ES6)
let globalnames = 'global names';
let names = 'hey';
{
  let names = 'ellie';
  console.log(names);
  names = 'hello';
  console.log(names);
}
console.log(names);
console.log(globalnames);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
console.log(age);
{
  console.log(age);
  var age = 4;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;
console.log(daysInWeek);

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - theread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 13.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
let a = '안녕';
let b = 4;
console.log(`value: ${a + b}, type: ${typeof (a + b)}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 134214523151563425421521521643263267325612453214637294653792856123789456128378942957162593n;
const number = 134214523151563425421521521643263267325612453214637294653792856123789456128378942957162593;

console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
console.log(`value: ${number}, type: ${typeof number}`);

// string
const char = 'c';
const brendan = 'brendannnnn';
const greeting = 'hello' + brendan;
const greeting2 = `hello ${brendan}!`;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
console.log(`value: ${greeting2}, type: ${typeof greeting2}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('vlaue: ' + helloBob + ' type:' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol(`id`);
const symbol2 = Symbol(`id`);
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for(`id`);
const gSymbol2 = Symbol.for(`id`);
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 22 }; // 안되는데 왜 안되는지 모르겠음 'name =' 를 'name:'로 바꿔주니 해결
console.log(ellie);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' / '5';
console.log(`value: ${text}, type: ${typeof text}`);
