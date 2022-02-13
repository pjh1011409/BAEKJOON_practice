const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().split('\n');

let number = input[0].split(' ');
let firstNum = number[0].split('').reverse().join('');
let seconNum = number[1].split('').reverse().join('');

console.log(firstNum > seconNum ? firstNum : seconNum);