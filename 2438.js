const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('\n');

let star = Number(input[0]);
let sum = '';

for(let i=1; i <= star; i++){
    sum += "*";
    console.log(sum);
}