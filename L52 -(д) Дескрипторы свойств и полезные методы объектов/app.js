const birthday =  Symbol('birthday');

const user = {
    name: 'Alex',
    surname: 'Smith',
    [birthday]: '20/03/2003',
    showMypublicData: function(){
      console.log(`${this.name} ${this.surname}`);
    }
}
// Object.defineProperty(user, 'birthday', {value: prompt('Data?'), enumerable: true, configurable:true});

Object.getOwnPropertyDescriptor(user, 'ShowMyPublicData', {enumerable: false});


for (let key in user) console.log(key);
console.log(Object.getOwnPropertyDescriptor(user, birthday));


Object.defineProperties(user, {
  name: {writable: false},
  surname: {writable: false}
})



// writable
// enumerable
// configurable
