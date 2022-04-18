/*
https://programmers.co.kr/learn/courses/30/lessons/81301

숫자와 영단어 
1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"


replace 

1. 문자열 메서드
2. 첫번째 인자의 데이터를 두번째 인자의 데이터로 변경

let str = "apple"

str.replace("a", "b")
console.log(str) // "bpple"

replace를 replaceAll처럼 사용하기


정규표현식
 /안에 검증하는 문자열 추가/



*/

// 나의 풀이
function solution(s) {
  const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]  
    
  let arr = s.split("")
  let str = ""
  let result = ""
  
  for (let i = 0; i < arr.length; i++) {
      if( isNaN(arr[i]) === true)  {
          str = str + arr[i]
      } else {
          result = result + arr[i]
      }
      
      if (number.indexOf(str) !== -1) {
          result = result + number.indexOf(str)
          str = ""
      }
  }
  
  return Number(result)
}







function solution2(s) {
  const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]  
   
  for(let i = 0; i < number.length; i++) {
      while(s.includes(number[i])) {
          s = s.replace(number[i], i)
      }
  }
    
    return Number(s)
}







function solution3 (s) {
  const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]  
   
  numbers.forEach((str, i) => {
      s = s.split(str).join(i)
     
  })
    return Number(s)
}


function solution4(s) {
  const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  // 문자열 안에 제로가 있는지 찾는다. g를 붙이면 전역...
    for (let i = 0; i < numbers.length; i++) {
        const regExp = new RegExp(numbers[i], "g")
        s = s.replace(regExp, i)
    }
    return Number(s)
    
}