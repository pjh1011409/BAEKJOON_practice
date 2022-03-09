const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split("/n");

let num = Number(input[0]);
let count = 0;
let i=0;
let sum = 1;

while(i+=6){

    sum += i;
    if(num <= sum){
        break;
    }
    count++;
    console.log(sum);
}
if(num === 1){
    console.log(1);
}
else{
    console.log(count+2);

}
