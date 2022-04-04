/*
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
*/

function solution(n) {
  let answer = -1;
  
  for (let i = 1; i * i <= n; i++) {
      // i의 마지막 값이 제곱근이다
      // console.log(i)
      if (i * i === n) {
          answer = i + 1
          return answer * answer
      }
      
  }
  return answer
}

// 제곱 표현하는 방법
/*

n ** 제곱하고 싶은 숫자
2 ** 11 2의 11제곱

Math.pow(n, 제곱하고 싶은 숫자)



*/

// while을 사용해서
function solution2 (n) {
  let num = 1
  
  while (num ** 2 < n) {
      num++ 
  }
  
  // console.log(num)
  return num ** 2 === n ? (num + 1) ** 2 : -1 
  
}

// 메서드 범벅
function solution3 (n) {
  // 제곱근을 찾아주는 메서드 ,,, 
  // Math.sqrt(num) 정수면 제곱근이고, 정수가 아니면 제곱근이 아니다
  
  // 정수 판별하는 메서드 true false를 반환
  // Number.isInteger()
  
  let sqlt = Math.sqrt(n)
  return Number.isInteger(sqlt) ? Math.pow(sqlt + 1, 2) : -1
 
  
  // 한줄로도 표현 가능
  // return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1
}