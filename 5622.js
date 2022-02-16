const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().split('\n');

let alpa = input[0].split('');
let arr = ['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'];
let num = [];

for(let i=0; i< arr.length; i++){
    for(let j=0; j< 4; j++){
        for(let k=0; k< alpa.length; k++){
            if(alpa[k] === arr[i][j]){
                num.push(i+2);
                }
            }
        }
    }

let result = [];
for(let l=1; l<=8; l++){
    for(let h=0; h< num.length; h++){
        if(l+1 === num[h]){
            result.push(2 + l);
        }
    }
}

const reducer = (acc,curr) => acc + curr;
console.log(result.reduce(reducer));