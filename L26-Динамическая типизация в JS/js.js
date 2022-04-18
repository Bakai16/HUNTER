//To string 

//1)
console.log(typeof(String(null)));     //ex. out    string
console.log(typeof(String(4)));         //ex. out    string

//2)
console.log(typeof(5 + ''));                 //ex. out    string


/////
const num = 5;

console.log("https://vk.com/catalog" + 5);
//ex.o   https://vk.com/catalog5

const fontSize = 26 + 'px';



/////To Number

// 1)
console.log(typeof(Number("4")));    //ex. out number

// 2)
console.log(typeof(+'5'));          //ex. out number

// 3)
console.log(typeof(parseInt("10px", 10)));         //ex. out number


let ans = +prompt("Hello", "");



////To  Boolean

// 0, '', null, undefined, NaN;


// 1)    нативный  жергиликтуу
let switcher = null;

if(switcher){
    console.log("Working...");
}

switcher = 1;    //1 boolenовые значение 

if(switcher){
    console.log("Working...");
}


// 2)
console.log(typeof(Boolean('4')));      //ex.out  boolean


// 3)
console.log(typeof(!!"4444"));          //ex.out  boolean
