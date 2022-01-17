const fs = require('fs')                  // '/dev/stdin'
const inputData = require("fs").readFileSync('예제.txt').toString().split(" ");

const [a,b] = inputData;

if(a>b){
    console.log(">");
}

else if(a<b){
    console.log("<");
}

 
else{
    console.log("==");
}

 
 