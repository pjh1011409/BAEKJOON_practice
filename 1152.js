const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().split('\n');

let arr = input[0].split(' ');
let count = 0;
for(let i=0; i< arr.length; i++){

    if(arr[i] !== ''){
        count++;
    }
}
console.log(count);