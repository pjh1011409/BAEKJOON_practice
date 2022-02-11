const fs = require('fs')                  // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().split(' ');


let result= [];


 for(let i=97; i<=122; i++){


    for(let j=0; j<input.length; j++){

         result.push(input[j].indexOf(String.fromCharCode(i)));
      }
     
   }


console.log(result.join(' '));

