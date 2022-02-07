let num = 20;

function showFirstMessage(text){
    console.log(text);
    console.log(num);
}
showFirstMessage("Hello world!");
//expected output: "Hello world!"   20






//
function calc(a, b){
    return (a + b);
}
console.log(calc(3, 4));
console.log(calc(5, 4));
console.log(calc(6, 6));
//expected output: 7  9  12





//function declaration
function ret(){
    let num = 50;


    //
    return num;
}
const anotherNum = ret();
console.log(anotherNum);
//expected output 50


//function expression  функциональное выражение   функциянын туюнтмасы
const logger = function(){
    console.log("Hello!");
};  //точка с запятой обязательна
logger();
//expeced output: Hello!