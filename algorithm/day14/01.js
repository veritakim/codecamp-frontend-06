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