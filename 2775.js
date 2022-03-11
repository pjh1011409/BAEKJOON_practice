const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');


let testNum = Number(input[0]);
let f = [];

for(let i=1; i<=testNum*2; i+=2){

    f.push(input[i]);
}

console.log(f);