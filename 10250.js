const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let testNum = Number(input[0]);
let arr = [];

for(let i=1; i<= testNum; i++){

    arr.push(input[i].split(' '));
}



for(let j=0; j< arr.length; j++){

    let H = arr[j][0];
    let N = arr[j][2];

    let Y = N % H;
    let X = Math.ceil(N/H);

    if(Y === 0){
        console.log(String(H)+String(X).padStart(2, '0'));
    }
    else{
        console.log(String(Y)+String(X).padStart(2, '0'));
    }
   

   
}