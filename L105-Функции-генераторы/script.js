// function* generator(){
//   yield 'S';
//   yield 'c';
//   yield 'r';
//   yield 'i';
//   yield 'p';
//   yield 't';
// }

// const str = generator();

// console.log(str.next().value);

function* count(n){
  for(let i = 0; i < n; i++){
    yield i;
  }
}

for(let k of count(7)){
  console.log(k);
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6

// const counter = count(7);

// console.log(counter.next().value);     //0
// console.log(counter.next().value);     //1
// console.log(counter.next().value);     //2
