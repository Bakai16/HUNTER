const user = {
  name: 'Alex',
  surname: 'Smith',
  birthday: '20/03/2003',
  showMypublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  }
}

const userMap = new Map(Object.entries(user));
console.log(userMap);
// 0: {"name" => "Alex"}
// 1: {"surname" => "Smith"}
// 2: {"birthday" => "20/03/2003"}
// 3: {"showMypublicData" => function () { console.log(`${this.name} ${this.surname}`); }}

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

// birthday: "20/03/2003"
// name: "Alex"
// showMypublicData: ƒ ()
// surname: "Smith"


const shops = [
  {rice: 500},
  {oil: 200},
  {bread: 50}
]
const budget = [ 5000, 15000, 25000];

const map = new Map([
  [{paper: 400}, 8000],
]);

shops.forEach((shop, i) =>{
  map.set(shop, budget[i]);
})

// console.log(map);
//expect output
// Map(3) {
//   { rice: 500 } => 5000,
//   { oil: 200 } => 15000,
//   { bread: 50 } => 25000
// }
// console.log(map.get(shops[0]))  //5000
// console.log(map.has(shops[0]))  //true
// map.delete(key);
// map.clear();
// map.size;


// const goods = [];

// for (let shop of map.keys()){
//   goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);
// 0: "paper"
// 1: "rice"
// 2: "oil"
// 3: "bread"


// for (let price of map.values()){
//   console.log(price)
// }
// 8000
// 5000
// 15000
// 25000


// for (let [shop, price] of map.entries ()){
//   console.log(price, shop)
// }
// 8000 {paper: 400}
// 5000 {rice: 500}
// 15000 {oil: 200}
// 25000 {bread: 50}

// map.forEach((value, key, map) => {
//   console.log(key, value);
// })
