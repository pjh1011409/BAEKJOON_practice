const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split("/n");

let num = Number(input[0]);
let n=1;
let sum=1;
let count=0;

while(n++){
    sum += n;
    if(num <= sum){
        break;
    }
    count++;
    
}

let min = sum-(count+1);
let max = sum;
let arr=[];

for(let i=min; i<=max; i++){
    arr.push(i);
   
}

let bunza = arr.indexOf(num)+1;
let bunmo = (1+arr.length) - bunza;

if(num === 1){
    console.log(1 +"/"+ 1);
}
else{
    console.log(bunza + "/"+ bunmo);

}

