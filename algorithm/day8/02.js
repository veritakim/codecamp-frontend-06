function solution(s) {
  /*if (s.length !== 4 && s.length !== 6) {
      return false;
  }
  for (let i = 0; i < s.length; i++) {
      if(isNaN(s[i]) === true) {
          return false
      } 
  }
  return true;*/


  // filter로
  // filter는 배열에서 사용이 가능하다
  // 문자열을 spilt으로 자르면 배열로 들어온다 
  let arr = s.split("");

  const answer = arr.filter(num => {
    // 숫자가 아닌 문자만 남기기
    // 문자일 경우만 남긴다. isNaN의 결과가 true값인 경우 NaN이다. 숫자가 아니다
    return isNaN(num) === true
  })

  return answer.length === 0; // 맞다면 true 아니라면 false를 반환하겠지 ? 
}

solution("a1234")