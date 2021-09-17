// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}

log("Hello world!");
log("happy");
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "corder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);
log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown..") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");
showMessage("Hi!", "k");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

function printAll2(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}
printAll("dream", "coding", "ellie", "korea");
printAll2("dream", "coding", "ellie", "korea");

// 5. Local scope
let globalMessage = "global"; //global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  // anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("no!");
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log("simplePrint!");
};

const simplePrint2 = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

simplePrint2();
console.log(add(3, 5));
console.log(simpleMultiply(5, 23));

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

const calculate = (command, a, b) => {
  if (command === "add") {
    return a + b;
  }
  if (command === "substract") {
    return a - b;
  }
  if (command === "divide") {
    return a / b;
  }
  if (command === "multiply") {
    return a * b;
  }
  if (command === "remainder") {
    return a % b;
  } else {
    return "please check command";
  }
};

function calculate2(command, a, b) {
  if (command === "add") {
    return a + b;
  } else {
    return "sorry..😥 This command is not supported";
  }
}

const calculate3 = function (command, a, b) {
  if (command === "add") {
    return a + b;
  } else {
    return "sorry..😥 This command is not supported😫";
  }
};
const calculate4 = function calculated(command, a, b) {
  if (command === "add") {
    return a + b;
  } else {
    return "sorry..😥 This command is not supported..😫 please check command";
  }
};

function calculate_answer(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      return "sorry..😥 This command is not supported😫";
  }
}
console.log(calculate("add", 5, 4));
console.log(calculate("add", 5, 4));
console.log(calculate("substract", 5, 4));
console.log(calculate("divide", 5, 4));
console.log(calculate("remainder", 5, 4));
console.log(calculate("multiply", 5, 4));
console.log(calculate("addd", 5, 4));

console.log(calculate2("add", 5, 4));
console.log(calculate2("substract", 5, 4));

console.log(calculate3("add", 7, 4));
console.log(calculate3("substract", 7, 4));

console.log(calculate4("add", 7, 4));
console.log(calculate4("substract", 7, 4));

console.log(calculate_answer("add", 5, 4));
console.log(calculate_answer("add", 5, 4));
console.log(calculate_answer("substract", 5, 4));
console.log(calculate_answer("divide", 5, 4));
console.log(calculate_answer("remainder", 5, 4));
console.log(calculate_answer("multiply", 5, 4));
console.log(calculate_answer("addd", 5, 4));
