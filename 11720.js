const fs = require('fs')                  // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().split('\n');

let count = Number(input[0]);
let number = (input[1]).split('');
let sum = 0;

for(let i=0; i< count; i++){
    
        sum += Number(number[i]);
}
console.log(sum);