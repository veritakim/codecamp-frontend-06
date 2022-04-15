/*
  피보나치 수열에서 n번째의 값을 1234567로 나눈 나머지를 받아와라 
  테스트 케이스 7 - 12까지 사용할 수 있는 정수의 범위가 넘어가서 처리를 먼저 해줘야한다.
*/

function solution(n) {
  let arr = []
  let sum = 0;
  
  for (let i = 0; i <= n; i++) {
      if (i === 0) {
          arr.push(0)
      }
      if (i === 1) {
          arr.push(1)
      }
      if (i >= 2) {
          sum = (arr[i - 1]  + arr[i - 2]) % 1234567
           arr.push(sum)
      }
      
  }
  
  return arr[n]
}