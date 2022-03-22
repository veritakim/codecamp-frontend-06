function solution (num) {
  let answer = '';
  
  if(num % 2 === 0) {
    answer = "even"
  } else {
    answer = "odd"
  }
  return answer;
}