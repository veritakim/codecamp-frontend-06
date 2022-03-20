// 문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.

// 반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.

function countLetter (str) {
  let count = 0;
  for (let data of str) {
    if(data === "a" || data === "A") {
      count++
    } 
  }
  return console.log(count);
}

countLetter("I am from Korea")