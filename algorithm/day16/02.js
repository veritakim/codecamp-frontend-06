/*
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
*/

function solution (x) {
  let sum = 0;
  
  // toString() 조심할 점.
  // String(1) ==> O
  // 1.toString() ==> X 변수에만 사용 가능한 메서드다

  String(x).map((el) => (
      sum += Number(el)
  ))
  
  return x % sum === 0 ? true : false
}


function solution2 (x) {
  // 초기값을 넣지 않았다. 초기값 0을 넣으면 acc는 숫자타입인 데이터를 받기 때문에 숫자 타입을 갖고 온다
  // let answer = x.toString().split("").reduce((acc, cur) => {
  //     return Number(acc) + Number(cur)
  // })
  let answer = x.toString().split("").reduce((acc, cur) => {
      return acc + Number(cur)
  }, 0)
  
  return x % answer === 0 ? true : false
}