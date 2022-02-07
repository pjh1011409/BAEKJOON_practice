const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('\n');


let str = input.toString();
result = str.charCodeAt(0);

console.log(result);