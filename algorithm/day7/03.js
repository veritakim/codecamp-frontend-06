function solution(s) {
  var answer = '';
  let i = Math.floor(s.length / 2);
  
  if(s.length % 2 === 0) {
    
      answer = s[i - 1] + s[i]
  } else {
      answer = s[i]
  }
  return answer;
}