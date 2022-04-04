function first (){
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}
first();
second();
//expect output:  2   1 


function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('Javascript', function(){
    console.log("Я прошель этот урок!");
});

//expect output 
// Я учу: Javascript
// Я прошель этот урок!
