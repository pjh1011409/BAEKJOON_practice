const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('\n');

const num = input[0]
let answer = ' ';
for(let i=1; i<= num; i++){
   answer += i+"\n";
}
console.log(answer);