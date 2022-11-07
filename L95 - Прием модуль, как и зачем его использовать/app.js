const app = '123';

const number = 1;

(function(){
  let number = 2;
  console.log(number);
  console.log(number + 3);
}());
console.log(number);
// 2
// 5
// 1

const user = (function(){
  const privat = function(){
    console.log("I am privat");
  };

  return {
    sayHello: privat
  };
}());

user.sayHello();
