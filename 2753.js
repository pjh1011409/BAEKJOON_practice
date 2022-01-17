const fs = require('fs')                  // '/dev/stdin'
const inputData = require("fs").readFileSync('예제.txt').toString().split(" ");

const year = inputData[0];

if( (year % 4 == 0) && (( year % 100 != 0) || (year % 400 == 0))){
    console.log("1");

}
else{
    console.log("0");
}