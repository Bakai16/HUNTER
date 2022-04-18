let str = "some";
let strObj = String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armoor: 100,
    sayHello :function(){
        console.log("hello");
    }
};

const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// };

// jonh.__proto__= solider;
// Object.setPrototypeOf(jonh, soldier);

jonh.sayHello();
