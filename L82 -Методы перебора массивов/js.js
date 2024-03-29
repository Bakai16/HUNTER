// Filter

// const names = ['Bakai', 'Adilbek', 'Eldiyar', 'Elen'];

// const shortNames = names.filter(function(name){
//   return name.length < 5;
// });

// console.log(shortNames);
// expect output ['Elen' ]



   //map

// const answers = ['IvAn', 'AnnA', 'Hello']; 

// const result = answers.map(item => item.toLocaleLowerCase());

// console.log(result);
//[ 'ivan', 'anna', 'hello' ]


    //every/some

// const some = [4, 'djfjdf', 'dfjjdfjf']; 

// console.log(some.some(item => typeof(item) === 'number'));  //true

// console.log(some.every(item => typeof(item) === 'number'));  //fasle  


    //reduce  - уменьшать  - азайтуу

// const arr = [4, 5, 1, 3, 2, 6];
//                       // 0    4
//                       // 4    5 
//                       // 9    1
//                       // 10   3
//                       // 13   2
//                       // 15   6
//                       // 21
// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);   //24

// const arr = ['apple', 'pear', 'plum '];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);  //apple, pear, plum 



const obj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')   //[ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]
.map(item => item[0]);   //[ 'ivan', 'ann' ]
console.log(newArr);


