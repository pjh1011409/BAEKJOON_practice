const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split('\n')

let Num = Number(input[0]);
let count = 0;


while(Num -= 5){ //N에서 계속 5를 빼다가 3의 배수가 존재할때까지 반복
 
                    if(Num%3===0){
                        break;
                    }
                   
                        count++;
                                    }
                console.log( (count+1) + Math.floor(Num/3));
                console.log(count);
                console.log( Math.floor(Num/3));
                