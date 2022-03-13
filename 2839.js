const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let Num = Number(input[0]);
let case1 = Num%5; 
let case2 = Num/5;


        if(case1===0){ //5의 배수일 결우
            console.log(case2);
        }
        else if(Num <= 2 || Num ===4 || Num === 7){
            console.log(-1);
        }
        else{ // 5로 나눴는데 나머지가 있을 경우
            if(case1%3===0){ // 5로 나누고 그 나머지가 3의 배수일 경우
            console.log(Math.floor(case2) + Math.floor(case1/3));
            }
            else { //5로 나누고 그 나머지가 3의 배수가 아닐 경우
                let count = 0;

                while(Num -= 3){ //N에서 계속 5를 빼다가 3의 배수가 존재할때까지 반복
                    if(Num%5===0){
                        break;
                    }
                    else{
                        count++;
                    }
                }
                
                console.log( (count+1) + Math.floor(Num/5));
                

            }
           
        }
