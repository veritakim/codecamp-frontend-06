const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function solution(s, n) {
    let answer = "";
    
    for (let i = 0; i < s.length; i++) {
        // 공백이 있는 것을 예외 처리
        if (s[i] === " ") {
            answer += s[i]
        } else {
            let idx = alphabet.indexOf(s[i])
                                        // 대문자를 자르겠다
            const word = idx > 25 ? alphabet.substring(26)
                                  : alphabet.substring(0, 26) // 소문자를 잘라온다
            idx = word.indexOf(s[i]) + n
            
            if (word [idx] === undefined) {
                idx -= 26
            }
            answer += word[ idx ]
        }
    }
    
    return answer
}


const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function solution2 (s, n) {
    let answer = ""
    
    for (let i = 0; i < s.length; i++) {
        if ( s[i] === " ") {
            answer += s[i]
        } else {
            // 대문자면 upper를 소문자면 lower를 갖고온다.
            const word = lower.includes( s[i] ) ? lower : upper
            
            let idx = word.indexOf(s[i]) + n
            
            // z에서 길이를 넘었을 때
            if (word[idx] === undefined) {
                idx -= 26
            }
            
            answer += word[ idx ]
            
        }
    }
    
    return answer
}


const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function solution3 (s, n) {
    const answer = s.split("")
                    .reduce( (acc, cur) => {
                        // console.log(acc, cur)
                        const word = lower.includes(cur) ? lower : upper
                        let idx = word.indexOf(cur) + n
                        
                        if (word[idx] === undefined) {
                            idx -= 26
                        }
                        
                        return acc + ( 
                        cur === " " ? " " : word[ idx ]
                        )
                    }, "")
    
    return answer

}

// 아스키코드를 활용한
function solution4 (s, n) {
  // charCodeAt(문자열) 아스키코드의 숫자를 알 수 있다
  // String.fromCharCode (90) 숫자의 알파벳을 알 수 있다.
      let answer = ""
      
      for (let i = 0; i < s.length; i++) {
          if (s[i] === " ") {
              answer += " "
              continue
          }
          
          let idx = s[i].charCodeAt() + n
          if (idx > 122 || idx > 90 && (idx - n) < 97) {
              idx -=26 // 소문자 대문자 z를 앞으로 보내기
          }
          
          answer += String.fromCharCode( idx )
          
      }
      
      return answer
  }