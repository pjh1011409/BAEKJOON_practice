const { count } = require('console');
const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('\n');

let num = Number(input[0]);
let a = '';

 for(let i=1; i<=num; i++){
    let count = 0;
    let sum = 0;

     for(let j=0; j<input[i].length; j++){

        a = input[i].split('');

        if(a[j] === 'O'){
            count++;
        }
        else{
            count = 0;
        }

        sum += count;
     }
     console.log(sum);
 }

 
