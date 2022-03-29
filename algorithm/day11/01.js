// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
function solution1(s) {
  let answer = true;

  let str = s.toLowerCase();
  let p = [];
  let y = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "p") {
      p.push(str[i]);
    } else if (str[i] === "y") {
      y.push(str[i]);
    }
  }

  if (p.length === y.length) {
    answer = true;
  } else answer = false;

  return answer;
}


function solution2(s){
  // p와 y의 갯수를 저장하는 변수값
  let p = 0;
  let y = 0;
  
  s.toLowerCase().split("").map((el) => {
      if(el === "p") { p++ } else if (el === "y") { y++}
  })
  
  return p === y;
}

function solution3 (s) {
  // p와 y의 갯수를 저장하는 변수값
  const check = {};
  s.toLowerCase() // 1. 소문자로 변환
      .split("")  // 2. 배열로 변환
  .forEach(str => {
      check[str] === undefined // 객체에 해당 키값이 없는지 검증
      ? check[str] = 1 // 없다면 초기값 1을 지정
      : check[str]++ // 있다면 +1을 한다
  })
  return check.p === check.y
  
}

// forEach와 map의 차이
// forEach는 return 값이 없다
