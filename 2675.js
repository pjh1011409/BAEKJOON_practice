const fs = require('fs')                  // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().split('\n');

let testNum = Number(input[0]);
let testCase = '';


for(let i=1; i<=testNum; i++){ //

    let result = '';
    testCase = input[i].split(' '); // 각자 테스트케이스마다의 배열
    let testCount = testCase[0]; // 테스트케이스 인덱스 0은 반복횟수
    let testWord = testCase[1]; //테스트케이스 인덱스  1은 문자열
    

    for(let j=0; j< testWord.length; j++){ // 문자열의 길이만큼 반복

        result += testWord[j].repeat(testCount); // 문자열 각각 인덱스 하나씩마다 반복횟수만큼 반복하여 누적되어 저장
    }

    console.log(result);
}




