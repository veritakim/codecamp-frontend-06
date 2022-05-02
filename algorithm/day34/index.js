const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution1(new_id) {
   new_id = new_id.toLowerCase()
    
// 2단계 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자를 제거
    let answer = ""
    for (let i = 0; i < new_id.length; i++){
        if (filter.includes(new_id[i])) {
            answer += new_id[i]    
        }
    }
    console.log(answer)    
    
 // 3단계 : 마침표가 2번이상 연속된다면 , 하나의 마침표로 치환(.. => .)   
    while( answer.includes("..") ) {
        answer = answer.replace("..", ".")
    }

// 4단계 처음이나 끝에 위치한다면 제거
    // console.log(answer)
    // 맨앞에 있는 마침표 제거
    if (answer[0] === ".") {
        answer = answer.substring( 1 )
    }
    
    function removeLastDot () {
        if (answer[answer.length - 1] === ".") {
        answer = answer.substring(0, answer.length - 1)
     } 
    }
    
    removeLastDot()
      
    
    // 빈문자열이라면 소문자 a를 대입
    if ( answer === "" ) {
        answer = "a"
    }
    
    if (answer.length >= 16) {
      
        answer = answer.substring(0, 15)
        removeLastDot()
    }
    
    // 문자열의 길이가 2자 이하라면, 마지막 글자로 3글자까지 채운다
    if (answer.length <= 2) {
        answer = answer.padEnd(3, answer[answer.length-1])
    }
     
    
  return answer
}