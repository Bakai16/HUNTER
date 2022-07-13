const arr = ['alex', 'oleg', 'asan', 'alex'];

function unique(arr){
  return Array.from(new Set(arr));
}

console.log(unique(arr));

// const set = new Set(arr);

// set.add('Ivan')
// .add('oleg');

// console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let value of set) console.log(value);
// alex
// oleg
// asan
// Ivan

// set.forEach((value, valueAgain, set)=>{
//    console.log(value, valueAgain)
// })
// alex alex
// oleg oleg
// asan asan
// Ivan Ivan

// console.log(set.values);
// console.log(set.keys());
// console.log(set.entries());
