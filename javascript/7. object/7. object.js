// 1. Literals and properties
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object ={ key : value };
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax
function print(person) {
  console.log(person.nm);
  console.log(person.age);
}
const gom = { nm: 'gom', age: 5 };
print(gom);
const orange = { nm: 'orange', age: 6 };

gom.hasjob = true;
gom.nm = 'gomigom';
console.log(gom.hasjob);

delete gom.hasjob;
console.log(gom.hasjob);

// 2. Computed properties
// key should be always string
console.log(gom.nm);
console.log(gom['nm']);
gom['hasjob'] = true;
console.log(gom.hasjob);

function printValue(obj, key) {
  console.log(obj[key]);
  console.log(obj.key);
}
printValue(gom, 'nm');
printValue(orange, 'age');

// 클래스 선언 위치가 아래로 가니 오류가 뜸
class MakePerson {
  constructor(nm, age) {
    this.nm = nm;
    this.age = age;
  }
}

// 3. Property value shorthand
const person1 = { nm: 'bob', age: 2 };
const person2 = { nm: 'steve', age: 21 };
const person3 = { nm: 'dave', age: 23 };
const person4 = new Person('berry', 20);
const person5 = new MakePerson('orange', 22);
console.log(person4);
console.log(person5);

// 4. Constructor Function
function Person(nm, age) {
  // this = {};
  this.nm = nm;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('nm' in gom);
console.log('age' in gom);
console.log('ramdom' in gom);
console.log(gom.random);

// 6. for..in vs for..of
// for (key in obj)
for (key in gom) {
  console.log(key);
}

for (a in gom) {
  console.log(a);
}

// for (value of iterable)
const array = [1, 2, 3, 5, 6];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { nm: 'gom', age: '2' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const fruit3 = { color: 'black' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
const mixed2 = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed2.color);
console.log(mixed2.size);
