const fs = require('fs')                  // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().split('\n');

let upper = input[0].toUpperCase();
let arr = upper.split('');
let count = 0; 

for(let i=0; i < arr.length; i++){
    let pos = arr.indexOf(arr[i]); //pos는 4의 값을 가집니다.

    while (pos !== -1) {
        count++;
        pos = arr.indexOf(arr[i], pos + 1); // 첫 번째 e 이후의 인덱스부터 e를 찾습니다.
      }
}



console.log(count); // 로그에 4를 출력합니다.