const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('');

let firstNum = Number(input[0]);
let seconNum = Number(input[1]);
let thirdNum = Number(firstNum + seconNum);
let result = '';
let i=0;

while(true){
 


    result = (seconNum.toString() + Math.floor((thirdNum%10)).toString());
     
    if(result[0] === input[0]){
        break;
    }
    
        input[0] = result[0];
        input[1] = result[1];
        console.log(result);
        console.log(input[0],input[1]);
    
    i++;
}
   console.log(i);
