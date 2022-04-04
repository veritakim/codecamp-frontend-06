/*
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
*/

function solution(a, b) {
  var answer = 0;
  if (a === b) {
      return b;
  } else {
      // 대소관계 정해주기
      // const min = a > b ? b : a
      const min = Math.min(a, b)
      // const max = a > b ? a : b
      const max = Math.max(a, b)
      
      for(let i = min; i <= max; i++) {
          answer += i
      }
  }
  return answer
}

function solution2 (a, b) {
  // reduce를 사용해서
  const max = Math.max(a, b) 
  const min = Math.min(a, b)

  if (a === b) return a;
   
  const answer = new Array(max - min).fill(1)
               .reduce((acc, cur, i) => {
                   const num = (min + cur) + i
                   return acc + num
               }, min)
  
  
  return answer
   
}

// 이 방식이 더 좋다구 한다...
function solution3 (a, b) {
  const max = Math.max(a, b) 
  const min = Math.min(a, b)
   
  const answer = new Array((max - min) + 1).fill(1)
               .reduce((acc, cur, i) => {
                   const num = min  + i
                   return acc + num
               }, 0)
  
  
  return answer
}