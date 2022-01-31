let fs = require('fs');                       // '/dev/stdin'
let input = Number(require('fs').readFileSync('예제.txt').toString());

let num = Number(input);
let sum;
let i = 0;

while (true) {
    i++;

    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10; 

    if (input === num) {
	break;
    } 
}

console.log(i);