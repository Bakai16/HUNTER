let a = 5;
    b = a;

b = b + 5;

console.log(b);
console.log(a);
// expect output     10    5


const obj = {
    a: 5, 
    b: 1
};

// const copy = obj;   //ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);

//expect output 
// { a: 10, b: 1 }
// { a: 10, b: 1 }


function copy(mainObj){
    let objCopy = {};

    let key;

    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 1,
    c: {
        x: 7,
        y: 9
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10 ;
newNumbers.c.x = 20;

// console.log(newNumbers);
// console.log(numbers);

//expect output 
//  { a: 10, b: 1, c: { x: 20, y: 9 } }
// { a: 2, b: 1, c: { x: 20, y: 9 } }

const add = {
    d: 17,
    e: 35
};

const clone = (Object.assign({}, add));
// { a: 2, b: 1, c: { x: 20, y: 9 }, d: 17, e: 35 }

clone.d = 90;

console.log(add);
console.log(clone);

// { d: 17, e: 35 }
// { d: 90, e: 35 }



const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = "jdfjdfj";

console.log(oldArray);
console.log(newArray);
//[ 'a', 'b', 'c' ]
// [ 'a', 'jdfjdfj', 'c' ]


function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 4, 6];

log(...num);

// 2
// 4 
// 6

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1, 
    two: 2
};

const newObject = {...q};