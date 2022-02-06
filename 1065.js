const fs = require('fs')                  // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().split('\n');

let num = Number(input[0]);
let hansu = 0;



function Interval(n){
    let numArr = n.toString();

    let interval1 = Number(numArr[1]) - Number(numArr[0]);
    let interval2 = Number(numArr[2]) - Number(numArr[1]);

    if(interval1 === interval2){
        hansu ++;
    }

    return hansu;
}
function hansuCalculator(n){

    for(let i=1; i<= n; i++){
        
        if(i < 100){
            hansu ++;
        }
        
        else{
            Interval(i);
        }
       
    
    }

    return hansu;
}

console.log(hansuCalculator(num));