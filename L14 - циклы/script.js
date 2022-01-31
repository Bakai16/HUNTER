// let num = 50;
// while (num <= 55 ){
//     console.log(num);
//     num++;
// }
//50      expected outputo
//51
//52
//53
//54
//55

//второй цикл
// let num = 50;
// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);
// //expected output 50 51 52 53 54 55

let num = 50;
for (let i = 1; i < 8; i++){
    console.log(num);
    num++;
}
// expected output 50 51 52 53 54 55 56 


//break и continue
for (let i = 1; i < 10; i++){
    if (i === 6){
        // break;   ///expected output 1 2 3 4 5
        continue;   ///expected output 1 2 3 4 5 7 8 9
    }
    console.log(i);
}
