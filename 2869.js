const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let V = Number(input[2]);
let lastLen = V - B;
let range = A - B;

console.log(Math.ceil(lastLen/range));