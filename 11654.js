const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('\n');

let alpa = input[0];
let aschi = alpa.charCodeAt(0);

console.log(aschi);