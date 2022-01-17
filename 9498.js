const fs = require('fs')                  // '/dev/stdin'
const inputData = require("fs").readFileSync('예제.txt').toString().split(" ");

const score = inputData[0];

if( 90 <= score && score <= 100){
    console.log("A");
}
else if( 80 <= score ){
    console.log("B");
}
else if( 70 <= score ){
    console.log("C");
}
else if( 60 <= score){
    console.log("D");
}
else{
    console.log("F");
}

 
 