const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split('\n');

const num = Number(input[0]);


if(num % 2 == 1){
    console.log(   ((1+num) * parseInt(num/2)) +    ((num+1)/2)     );
}
else{
    console.log(((1+num) * (num/2)));
}
