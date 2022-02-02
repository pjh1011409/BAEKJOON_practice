const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('\n');



let numbers = input.map(x=> Number(x));
let max = Math.max.apply(null, numbers);
let maxlen = numbers.indexOf(max) + 1;

console.log(max);
console.log(maxlen);


//  let numbers = input.map(x=> Number(x));;
//  let max = numbers[0];
//  let len = 0;
//  for(let i = 0; i < 9 ; i++){

//      if(max < numbers[i]){
//          max = numbers[i];
//         len = i;
//     }
// }
//  console.log(max);
//  console.log(len + 1);



