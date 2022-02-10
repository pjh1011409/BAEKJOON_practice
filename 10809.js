const fs = require('fs')                  // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().split('\n');


let word = input[0];
let wordarr = input[0].split('');

for(let i=97; i<= 122; i++){

   console.log(i.charCodeAt(0));

}