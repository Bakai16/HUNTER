// const bigint = 12343493493843848388348n;

const someBigint = BigInt(12343493493843848388348);

// console.log(1n + 2n); //3n
// console.log(1n > 2n); //false

// Math > error

let bigint = 1n;
let number = 2n;

console.log(bigint + BigInt(number));  //3n
