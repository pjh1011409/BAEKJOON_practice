const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('\n');

// let arrlen = input[0];
// let arr  = input[1].split(' ');
// let min = Math.min.apply(null, arr);
// let max = Math.max.apply(null, arr);
// console.log(min, max);

let arrlen = Number(input[0]);
let arr  = input[1].split(' ').map(x=> Number(x));

let min = arr[0];
let max = arr[0];

for(let i = 1; i < arrlen; i++){

    if(min > arr[i]){
        min = arr[i];
    }
    else if(max < arr[i]){
        max = arr[i];
    }

}
console.log(arr);
console.log(`${min} ${max}`);