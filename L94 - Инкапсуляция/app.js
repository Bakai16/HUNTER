class User{
  constructor(name, age){
    this.name = name;
    this._age = age;
  }
  surname = "Akylbekovich";

  say(){
    console.log(`Имя пользоватлея: ${this.name} ${this.surname}, возраст ${this._age}`);
  }

  get age(){
    return this._age;
  }

  set age(age){
    if(typeof age === 'number' && age > 0 && age < 110){
      this._age = age;
    }else(
      console.log('Недопистимое значение!')
    );
  }
}

const bakai = new User("Bakai", 19);
console.log(bakai._age);

bakai._age = 20;
console.log(bakai._age);

bakai.say();
