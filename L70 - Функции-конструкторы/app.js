function User(name, id){
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function(){
    console.log(`Hello ${this.name}`);
  };
}

// class User {
//   constructor(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//   }
//   hello(){
//     console.log(`Hello ${this.name}`);
//   }
//   exit(){
//     console.log(`Пользователь ${this.name} ушел`);
//   }
// }

User.prototype.exit = function(){
  console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User("Ivan", 32);
const alex = new User("Alex", 32);

ivan.exit();
//Пользователь Ivan ушел

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);
