const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString();

const num = Number(input[0]);

for(let i = 1; i<=9; i++){
 
    console.log(`${num} * ${i} = ${num*i}`);
}