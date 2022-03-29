function solution(n) {
  const arr  = [];
  let answer = n.toString().split('')
  
  for (let i = answer.length-1; i >= 0 ; i--) {
      arr.push(Number(answer[i]))
  }
               
  return arr
}