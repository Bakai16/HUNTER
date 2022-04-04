const arr = [1, 2, 5, 23, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b){
    return a - b;
}
// [ 1, 2,  3, 5,
// 6, 8, 23
// ]

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
//100
//[ 1, 2, 3, 6, 8, <94 empty items>, 0 ]


arr.forEach(function (item, i , arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});
//expect output
// 0: 1 внутри массива 1,2,3,6,8
// 1: 2 внутри массива 1,2,3,6,8
// 2: 3 внутри массива 1,2,3,6,8
// 3: 6 внутри массива 1,2,3,6,8
// 4: 8 внутри массива 1,2,3,6,8


// arr.pop();       //[ 1, 2, 3, 6 ]     удалить последный
// arr.push(10);       //[ 1, 2, 3, 6, 8, 10 ]   
// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
//expect output
// 1
// 2
// 3
// 6
// 8

for(let value of arr){
    console.log(value);
}
//expect output
// 1
// 2
// 3
// 6
// 8


const str = prompt("", "");
const products = str.split(", ");
products.sort();    //aaa; bbb; qqq
console.log(products.join('; '));

//expect output  -->  sdfjdf; jsdkfjk; jkdjsf; jdksfj; jkdfj