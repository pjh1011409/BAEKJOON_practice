const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('\n');

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);
let result = A * B * C;
let resultarr = result.toString();
let count = 0;
console.log(resultarr);
for(let i=0; i <= 9; i++) {
    if(Number(resultarr[i]) === i)  {
      count++;
    }
    console.log(count);
  }
  
