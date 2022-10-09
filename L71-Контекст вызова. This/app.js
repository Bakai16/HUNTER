
// function showThis(a, b){
//   console.log(this);
//   function sum(){
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4, 5);


// const obj = {
//    a: 20,
//    b: 20,
//    sum: function(){
//     function shot(){
//       console.log(this);
//     }
//     shot();
//    }
// };
// obj.sum();



// function count(num){
//   return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(21));

// 1) Обычные функция: this = window но если use strict = undefined
// 2) контекст у методов обьекта - сам обьект
// 3) this в конструкторах и классах - это новый экземпляр обьекта
// 4) ручная призязка this - call , apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     this.style.backgroundColor = 'red';
// });

const obj = {
  num: 5,
  sayNumber: function(){
    const say = () =>{
      console.log(this.num);
    };
    say();
  }
};

obj.sayNumber(); 


const double = (a) => a * 2;

console.log(double(4));
