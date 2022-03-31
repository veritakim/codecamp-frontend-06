/*
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 
모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

numbers	       result
[2,1,3,4,1]	[2,3,4,5,6,7]
[5,0,2,7]	[2,5,7,9,12]
*/

function solution(numbers) {
  let a = 0;
  let b = 0;
  let arr = [];
  
  for(let i = 0; i < numbers.length; i++) {
          a = numbers[i]
      for(let j = 1; j < numbers.length; j++) {
          if(i === j) {
              continue;
          } else {
              b = numbers[j]
              if(!arr.includes(a+b)) {
                  arr.push(a+b)
              }
          }
          
      }
  }
  
  return arr.sort((a, b) => a-b)

}

function solution2 (numbers) {
    // new Set을 사용
    // 고유한 데이터만 받아올 수 있다. (중복되지 않는 데이터) 
    // 겉은 배열 형태이지만, 타입은 객체형태
   
   
     
     // arr.add(1)
     // arr.add(2)
       
     // arr.has()  값이 있으면 true 없으면 false
     // arr.delete()  값이 있으면 지우고 true 없으면 false
       
     // arr.clear  데이터 값 초기
       
       const arr = new Set()
       /*
       arr.add(1)
       arr.add(2)
       
       add를 해주면 중복된 값은 넣지 않는다.
       
       // 배열의 forEach와는 다르지만 작동원리가 같다
       arr.forEach(el => {
           console.log(el)
       })
       
       // set => 배열로 변환하는 메서드
       // 1. Array.from
       // 2. spread [...arr]
       const answer = [...arr]
       console.log
       */
       
    
    const arr = new Set()
    
       for(let i = 0; i < numbers.length; i++) {
           for(let l = i + 1; l < numbers.length; l++) {
              let sum = numbers[i] + numbers[l]
               arr.add(sum)
           }
       }

    return Array.from(arr).sort((a, b) => a - b)
   }

   function solution3 (numbers) {
    const answer = new Set()
    numbers.forEach((num1, i) => {
      // console.log(num1, i) 
        // 한 칸 뒤에 있는 것을 갖고 온다 numbers.slice(i + 1)
        // console.log(numbers.slice(i + 1))
        numbers.slice(i + 1).forEach(num2 => {
            const sum = num1 + num2
            
            answer.add(sum);
        }) 
    })
    return [...answer].sort((a,b) => a - b)
}