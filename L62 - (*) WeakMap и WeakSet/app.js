let cache = new WeakMap();

function cahcheUser(user){
  if(!cache.has(user)){
    cache.set(user, Date.now());
  }

  return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cahcheUser(lena);
cahcheUser(alex);

lena = null;

// console.log(cache.has(lena));  //false
// console.log(cache.has(alex));  //true



// WeakSet
// add, has, delete

let message = [
  {text: 'Hello', from: 'Joth'},
  {text: 'World', from: 'Alex'},
  {text: 'Hi', from: 'M'},
];

let readMesage = new WeakSet();

readMesage.add(message[0]);
// readMesage.add(message[1]);

readMesage.add(message[0]);
message.shift();
console.log(readMesage.has(message[0]));
