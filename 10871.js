const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('\n');


let [N, X] = input[0].split(' ');
let A = input[1].split(' ');
let result= '';


for(let i=0; i<= N-1; i++){
    if(Number(A[i]) < X ){
        result += A[i] + ' ';
}
}
  console.log(result);
