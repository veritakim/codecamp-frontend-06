function solution(arr) {
  // var answer = 0;
  
  // for(let i = 0; i < arr.length; i++) {
  //     answer += arr[i];
  // }
  // answer = answer / arr.length
  // return answer;

  // reduce 사용가히
  const answer = arr.reduce((acc, cur) => {
      return acc + cur
  }, 0)

  return answer / arr.length
  
}