// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'size']);
console.log(json);

console.log('----------------');

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key:${key}, value:${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2.JSON to Object
// parse(json)
console.log('------------------------------------');
json = JSON.stringify(rabbit);
console.log(json);
const obj1 = JSON.parse(json);
console.log(obj1);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
