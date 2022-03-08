const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let str = input[0];
let arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for(let alpa of arr){
    str = str.split(alpa).join("p");
}



console.log(str.length);