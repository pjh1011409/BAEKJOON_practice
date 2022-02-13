const fs = require('fs')                  // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().split('\n');

let upper = input[0].toUpperCase(); // 입력값을 영대문자로 통일 시켜주기
let arr = upper.split(''); // 각각 하나씩의 인덱스로 나누어 배열로 저장하기

// 배열 안에 중복된 값이 몇개씩 존재하는지 구하는 식
// reduc를 사용하여 중복값을 저장을 객체가 아닌 Map 자료구조에 하도록...
// 일반객체와 다르게 Map은 객체를 key로 지정할 수 있다.
const result = arr.reduce((accu,curr)=> {
  accu.set(curr, (accu.get(curr)||0) +1) ;
  return accu;
},new Map());
// 따라서 배열 두개를 생성 후, 각각의 key, value 값을 저장해준다.
let maxCount = [];
let maxAlpa = [];
for (let [key, value] of result.entries()) { 
  maxCount.push(value);
  maxAlpa.push(key);
}
//maxAlpa = [Z,a]
// maxCount = [2,1]
let max = Math.max.apply(null, maxCount); //maxCount 배열 안에서 최댓값을 구해서 max에 저장
let maxIndex = 0; //최댓값이 존재하는 인덱스 위치
let counter = 0; // 최대값의 중복 유무를 나타내기 위한 카운트
//maxCount 배열 내부를 반복
for(let j=0; j<=maxCount.length; j++){
  //만약 아까 구해놓은 max 값과 동일한 값이 있다는 것은 그 값이 최댓값이라는 뜻
  // 만약 배열 [2,1]이 있으면 max는 2 였고, 또다시 반복할때 2를 만나 같은 값을 만난것
  if(maxCount[j] === max){ 
    maxCount[j] = max;
    maxIndex = j; // 최대값을 만났을때 그 값의 인덱스 값을 저장
    counter ++; // 카운터가 1증가
  }
  if(counter > 1){ //만약 카운터가 1 이상으로 존재한다는 것은 최대값이 중복이 존재한다는 뜻
    console.log('?'); // 따라서 문제에서 제시한 것과 같이 ? 를 출력하여 리턴
    return;
  }
}
console.log(maxAlpa[maxIndex]); 
//예외발생이 일어나지 않을 경우 그 인덱스 값을 maxAlpa 배열의 인덱스 값으로 저장
//maxAlpa = [Z,a]
// maxCount = [2,1]
//즉, 최대값이 존재하는 2의 인덱스 값은 0이고, 이 인덱스는 maxAlpa의 최대값 위치를 나타낸다.
