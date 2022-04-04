const option = {
    name: 'text',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("Test");
    }
};
option.makeTest();    //Test 

const {border , bg} = option.colors;
console.log(border);       //e. output  black


// console.log(Object.keys(option).length);   //expect output [ 'name', 'width', 'height', 'colors' ]  2/  4


// console.log(option.name);

// delete option.name;
// console.log(option.colors);

// let counter = 0;
// for (let key in option){
//     if (typeof option[key] === 'object'){
//         for(let i in option[key]){
//             console.log(`Свойство ${i} имеет значение ${option[key][i]}`);
//         }
//     }else{
//         console.log(`Свойство ${key} имеет значение ${option[key]}`);
//         counter++;
//     }
// }
// console.log(counter);
//expect output: 2
// Свойство name имеет значение text
// Свойство width имеет значение 1024
// Свойство height имеет значение 1024
// Свойство border имеет значение black
// Свойство bg имеет значение red
