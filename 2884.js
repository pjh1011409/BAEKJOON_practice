const fs = require('fs')                  // '/dev/stdin'
const input = require("fs").readFileSync('예제.txt').toString().split(" ");

const h = Number(input[0]); 
const m = Number(input[1]); 

if( m >= 45 ){
    console.log(h, m-45);
}
else if(m < 45){
    
    if(h==0){
        console.log(23, m+15);
    }
    else if(h=!0){
        console.log(h-1, m+15);

    }
}



 