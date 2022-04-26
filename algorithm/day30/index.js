function solution(board, moves) {
  let answer = 0;
  const bucket = []
  
  // 크레인이 이동하는 위치값을 구하는 반복문
  for (let i = 0 ; i < moves.length; i++ ) {
      // console.log(moves[i])
      
      // 크레인이 이동해서 뽑아올 수 있는 인형의 위치값을 구하는 반복문
      for (let l = 0; l < board.length; l++) {
          
          const doll = board[l][moves[i] - 1]
          console.log(doll, moves[i])
          
          // 인형이 있는 칸이 빈칸이 아니라면
          if (doll !== 0) {
              // 방금 뽑은 인형의 위치 0으로 만들기
             board[l][moves[i] - 1] = 0
              
              // 바구니에 넣으려고 하는 인형이 바구니에 있는 마지막 데이터랑 동일한지
             if(doll === bucket [bucket.length - 1]) {
                 answer += 2
                 bucket.pop() // 맨 마지막 인형 제거
                 break
             }
              
              bucket.push(doll)
              break
          }
      }
  } 
  
  
  return answer;
} 


function solution2(board, moves) {
  let answer = 0;
  const bucket = []
  
  moves.forEach((move) => {
       // 반복문이 실행되지 않도록 하는 스위치 변수 stop이 false 값일 때만 반복문을 실행
      let stop = false
      
      board.forEach((location) => {
          const doll = location [move - 1]
          
          if (stop === false) {
              if (doll !== 0) {
                  location [move - 1] = 0
                  
                   if (doll === bucket[bucket.length-1]) {
                       answer += 2
                       // bucket.pop()
                       bucket.splice (bucket.length - 1, 1)
                   } else {
                     bucket.push(doll)  
                   }
                   
                   stop = true 
               }
          }
      })
  })
  
  return answer
}