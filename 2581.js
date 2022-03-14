const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split("\n");

let min = Number(input[0]);
let max = Number(input[1]);
let arr = [];
let sum = 0;

for(let i=min; i<= max; i++){ //전체 테스트케이스 반복
    let count = 0;

    for(let j = 1; j <= i ; j++){ // 테스트케이스까지의 숫자들을 나눠보는 코드   
        if(i % j ===0){
            count++;           
        }
    }
    if(count <= 2){
        arr.push(i);
        sum += i;
        
    }
}  
    if(arr.includes(1)){
        arr.shift();
        
            if (arr.length === 0){
                console.log(-1);
            }
            else{
                console.log(sum-1);
                console.log(arr[0]);
            }
    }
    else{
        if (arr.length === 0){
            console.log(-1);
        }
        else{
            console.log(sum);
            console.log(arr[0]);
        }        
    }
    

