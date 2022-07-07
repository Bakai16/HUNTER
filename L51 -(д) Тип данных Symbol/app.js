// const obj = {
//   'name': "Test"
// }

// let id = Symbol('id');
// obj[id] = 1;

// console.log(obj['id'])


const myAwesomeDB = {
  movies: [],
  actors: [],
  [Symbol.for('id')]: 123
}

// Сторонний код библиотеки

myAwesomeDB.id = '32423444';

console.log(myAwesomeDB[Symbol.for('id')]);
console.log(myAwesomeDB);
