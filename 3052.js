const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('\n');

let numbers = input.map(x=>Number(x));

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] % 42;
}

let set = new Set(numbers);
numbers = [...new Set(numbers)];

console.log(numbers.length);
