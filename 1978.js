const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split("\n");

let Num = Number(input[0]);
let arr = input[1].split(' ');
let count = 0;

for(let i=0; i< Num; i++){ //전체 테스트케이스 반복
    let sum = 0;

    for(let j=1; j<= Number(arr[i]); j++){ // 테스트케이스까지의 숫자들을 나눠보는 코드   
        if(arr[i] % j ===0){
            sum++;           
        }
    }
    if(sum <= 2){
        count ++;
    }
}

if(arr.includes("1")){
    console.log(count - 1);
    }
else{
        console.log(count);

    }
