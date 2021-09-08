// Don't give up

// 함수 선언
function doSomething(add) {
  console.log(add);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
doSomething(add(6, 5));

console.log(add(1, 3));
const result = add(1, 5);
console.log(result);

const addFun = add;
const result1 = addFun(1, 5);
console.log(result1);
