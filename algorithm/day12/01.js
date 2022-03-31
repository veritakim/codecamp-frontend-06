function solution(n) {
  const arr  = [];
  let answer = n.toString().split('')
  
  for (let i = answer.length-1; i >= 0 ; i--) {
      arr.push(Number(answer[i]))
  }
               
  return arr
}


function solution2 (n) {
    
  // String()과 toString의 차이점
  // String은 안에 그대로 넘버타입을 선언해줘도 되지만 
  // toString()은 사용하려면 넘버를 변수에 담아줘야한다.

  // reverse 배열을 반전시키는 메서드
  
  return n.toString().split("").reverse().map((el) => {
      return Number(el)
  })
  
}