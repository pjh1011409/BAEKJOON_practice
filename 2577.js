const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('\n');

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);
let result = A * B * C;
let resultarr = result.toString();

for(let i=0; i <=9 ; i++){
    let count = 0;

    for(let j=0; j<=resultarr.length; j++){
      if(Number(resultarr[j]) === i){
        count++;
      
      }
   
  }
  console.log(count);
}

  
