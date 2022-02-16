const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let testCount = Number(input[0]);
console.log(testCount);


     //중복된 값만 불러오기 [2, 4, 1] 
     var overlapArr = input[1].filter(function(item, index){ 
         return arr.indexOf(item) !== index;
         });

console.log(overlapArr);



// //중복 제거 [1, 2, 3, 4, 5] 
// var removeOverLapArr = arr.filter(function(item, index){ 
//     return arr.indexOf(item) === index; });

