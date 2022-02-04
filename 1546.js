const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('\n');

let numbers = Number(input[0]);
let scores = input[1].split(' ').map(x=>Number(x));
let max = Math.max.apply(null, input[1].split(' '));
let sum = 0;

for(let i=0; i<numbers; i++){
    scores[i] = (scores[i]/max) * 100;
    sum += scores[i];
}
console.log((sum/numbers));