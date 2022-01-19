const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('\n');

const num = input[0];

for(let i=1; i<= num; i++){
    let a = input[i].split(' ');
    console.log(`Case #${i}: ${Number(a[0]) + Number(a[1])}`);
}

