const user = {
  name: 'Alex',
  surname: 'Smith',
  birthday: '20/03/2003',
  showMypublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  }
}

for (const key in user) {
  console.log(user[key]);
}

const arr = ['b', 'a', 'c '];
Array.prototype.someMethod = function () {};

console.dir(arr);

for (const key of arr) {
  console.log(key);
}

const salaries = {
  jonth: 500,
  ivan: 1000,
  ann: 5000,
  sayHello: function () {
    console.log('hello');
  }
}

salaries[Symbol.iterator] = function () {
    return {
        current: this.jonth,
        last: this.ann,

    next() {
        if (this.current < this.last) {
            this.current = this.current + 500;
            return {
            done: false,
            value: this.current
            };
        } else {
            return {
                done: true
            }
        }
    }
    }
}
const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());


for (let res of salaries) {
  console.log(res);
}
