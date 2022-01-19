const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('\n');

const num = input[0]
let answer = '';

for(let i=num; i>=1; i--){
   answer += i+"\n";
}

console.log(answer);