// https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let count = 0;
   
  if (num === 1) {
      count = 0;
  } else {
      while (true) {
      if(num % 2 === 0) {
          num = num / 2
      } else {
          num = (num * 3) + 1
      }
       count++

      if(num === 1) {
          break;
      }

      if(count > 500) {
          count = -1;
          break;
      }
    }
  }
  
  return count
}


function solution2 (num) {
        
    for (let i = 0; i <= 500; i++) {
        
        if(num === 1) {
            return i
        } else if (num % 2 === 0) {
            num /= 2;
        } else {
            num = num * 3 + 1
        }
    }
    
    return -1
}

function solution3 (num) {
    let answer = 0;
    
    while(num != 1) {
        if (answer >= 500) {
            return -1;
        }
        answer++;
        num = num % 2 === 0
            ? num = num / 2 
            : (num = num * 3) + 1
        
    }
    return answer
}


function solution4 (num) {
    let answer = 0;
    
    // reduce를 사용하기 위한 배열 
    // 문제에서 500번이상 돌려도 1이되지 않는... 배열의 길이는 500
    // reduce _ 언더바는 사용하지 않겠다.
    const result = new Array(500).fill(1)
                .reduce((acc, _) => {
                    if(acc !== 1) {
                         answer++
                         return acc % 2 === 0
                          ? acc / 2 // 짝수일때
                          : (acc * 3) + 1 // 홀수일때
                    } else {
                        return 1;
                    }
                  
                }, num)
    
    return result !== 1? -1 : answer
}