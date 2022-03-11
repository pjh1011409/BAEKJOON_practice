const fs = require('fs');     // '/dev/stdin'
const input = fs.readFileSync('예제.txt').toString().trim().split("/n");

let num = Number(input[0]);
let n=1;
let sum=1;
let count=0;

// 입력값은 몇번째 인지에 대한 정수값을 가리킨다.
// 1/1  -> 1/2 2/1 -> 1/3 2/2 3/1 같이 증가 하는 패턴은
// 총 누적개수가 1 -> 3 -> 6 -> 10 씩으로 그 사이 증가 값이 2,3,4,5 씩 증가한다.
// n은 사이 1씩 증가하는 사이 증가값, sum은 그 사이값들이 더해져서 누적되는 값이다.
// 만약 입력값이 sum 값보다 작은 조건문을 만족하면 반복문을 빠져나온다. 
// 이때까지 반복한 횟수를 count값에 누적하고 +1 을 하면 입력값이 존재하는 단계를 알 수 있다. 
while(n++){
    sum += n;
    if(num <= sum){
        break;
    }
    count++;
    
}

let min = sum-(count+1); 
// min은 입력값이 속해있는 단계의 최소값을 말한다.
let max = sum; 
//sum은 누적된 값이므로 max는 예를들어 5번째 분수를 구하면 5번째가 속해있는 단계의 최대값을 말한다.
let level = count+2; // 입력값이 속해있는 단계 
// 예를 들어 분수 개수 1 -> 2 -> 3 -> 4 는 각각 1,2,3,4레벨 씩인 것

let arr=[];

for(let i=min; i<=max; i++){
    arr.push(i); // 2 와 3 이 배열에 저장
   
}

let bunza = 0;
let bunmo = 0;

  // 레벨이 짝수 일때는 분모가 올믐차순, 분자가 내림차순이다
if(level % 2 ===0){
    bunza = arr.indexOf(num)+1; //분자값을 배열의 인덱스값 +1 로 저장
    bunmo = (1+arr.length) - bunza; // 분자와 분모를 더하면 그 단계의 공통된 합이 나온다.
    // 따라서 배열길이+1 - 분자는 분뫄값이 나온다.
  
}
else{
    // 레벨이 홀수 일때는 분모가 내림차순, 분자가 오름차순이기 때문에 분자, 분모 값을 서로 반대로 계산
  
    bunmo = arr.indexOf(num) + 1;
    bunza = (1+arr.length) - bunmo;
}


// 입력값이 1일 경우 1은 예외값이 발생하므로 1이 출력되게 조건문을 따로 만들어준다.
if(num === 1){
    console.log(1 +"/"+ 1);
}
else{
    console.log(bunza + "/"+ bunmo);

}

