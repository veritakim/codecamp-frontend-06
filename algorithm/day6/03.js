/*프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
phone_number는 길이 4 이상, 20이하인 문자열입니다.*/


function solution(phone_number) {

  let answer = '';
  
  for(let i = 0; i < phone_number.length; i++) {
      if( i < phone_number.length -4 ) {
          // 뒤 4자리를 제외한 앞에 번호들을 가져온다
          answer += "*"
      } else {
          answer += phone_number[i]
      }
          
  }
  
  
  return answer;

  // 다른 방법. padStart를 이용.
  /*let answer = '';
    
  // 뒤 4자리를 제외한 앞에 번호들을 *으로 채워준다
   answer = answer.padStart(phone_number.length - 4, "*")
  // 뒤 4자리를 갖고와서 붙여주자 
  console.log(answer)
  
  answer += phone_number.slice(phone_number.length - 4);
  return answer;*/
}