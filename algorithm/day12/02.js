function solution(arr, divisor) {
  const answer = [];
  
  const answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] % divisor === 0) {
            answer.push(arr[i])
        }
    }
  return answer.length === 0 ? [-1] : answer.sort((a,b) => a - b)
}

function solution2 (arr, divisor) {
    
  const answer =  arr.filter((el) => {return el % divisor === 0}).sort((a, b) => a - b)
  return answer.length === 0 ? [-1] : answer
}