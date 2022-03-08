const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);


let N = A / (C - B); 
let result = Math.floor(N) + 1;

console.log(B < C ? result : -1);
