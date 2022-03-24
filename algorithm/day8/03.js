/*
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.


*/

function solution(n) {
  
  /*
  for(let i = 0; i <= n; i++) {
      if ( n % i === 0) {
          answer += i;
      }
  }
  */

  /*
  for (let i = 0; i < n / 2; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  
  return answer; 
  */

  // reduce를 사용하기.
  // 배열이 필요하다.
  // n개의 길이만큼의 빈 배열이 만들어진다.
  const answer = new Array(n).fill(1).reduce((acc, cur, i) => {
    console.log(cur + i) // 현재값 + 인덱스 값. 현재값이 1로만 채워서 다른 수를 못갖고 온다
          // 약수가 맞다면          약수들을 더해주고 : 아니라면 다음으로 넘긴다
    return n % (cur + i) === 0 ? acc + (cur + i) : acc
  }, 0); 
  // .fill(n) n으로 array를 채우고 싶다




}