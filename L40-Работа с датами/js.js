const now = new Date();

console.log(now.setHours(18));
console.log(now);

// console.log(now.getFullYear());   // 2022
// console.log(now.getMonth());      // 4  May
// console.log(now.getDate());       // 1
// console.log(now.getDay());        // 5
// console.log(now.getHours());      // 14
// console.log(now.getUTCHours());   // 11

// console.log(now.getTimezoneOffset());  -130
console.log(now.getTime());


let start = new Date();

for (let i = 0; i < 100000; i++){
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отробатал за ${end - start} миллисекунд`);
