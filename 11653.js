const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split("\n");

let Num = Number(input[0]);

let result = [];
for (let i = 2; i <= Num; i++) {
  while (Num % i === 0) {
    Num = Num / i;
    result.push(i);
  }
}
console.log(result.join("\n"));