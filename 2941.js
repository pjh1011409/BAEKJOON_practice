const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

// = 61  - 45
// c 99 d 100 z 122  l 108  j 106  n 110  s 115

// 베열안에 다  넣어줘
// 그리고 지나갈때마다 입력값이 지나가고 존재했으면 카운트 1증가
// 만약에 없으면 없는 갯수들 마 1씩

let arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let count = 0;
for(let i=0; i< arr.length; i++){

    if(input[0].includes(arr[i])){
        count ++;
        
    }
    
}
console.log(input[0].length - count);
