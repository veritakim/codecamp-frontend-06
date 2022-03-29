function solution(arr, divisor) {
  const answer = [];
  
  arr.map((el) => {
      if (el % divisor === 0) {
          answer.push(el)
      } 
  })
  if(answer.length === 0) {
      answer.push(-1)
  }
  
  console.log(answer.sort())
  // return answer;
}