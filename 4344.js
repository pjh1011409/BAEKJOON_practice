const fs = require('fs')                  // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().split('\n');

let nums = Number(input[0]);

for (let i = 1; i <= nums; i++) {
  
  let scores = input[i].split(' ');
  let studentNum = Number(scores[0]);
  let sum = 0;
  let passStudent = 0;


  for (let j = 1; j <= studentNum; j++) {
    sum += Number(scores[j]);
  }
  let devide = sum / studentNum;

  for (let k = 1; k <= studentNum; k++) {
    if (devide < scores[k]) {
      passStudent++;
    }
  }
  
  console.log((passStudent / studentNum * 100).toFixed(3) +'%');
  
}
