const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');


let A = BigInt(input[0]);
let B = BigInt(input[1]);
let sum = A + B;
console.log(sum.toString());