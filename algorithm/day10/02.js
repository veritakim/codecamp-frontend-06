// function solution(array, commands) {
//   const answer = [];

//   for(let idx = 0; idx < commands.length; idx ++) {
//      const i = commands[idx][0]
//      const j = commands[idx][1]
//      const k = commands[idx][2]

//      // array를 i번째부터 j번째까지 자른 결과 저장
//      const result = array.slice(i - 1, j).sort();

//       console.log(result)

//       // 배열의 sort는 숫자의 첫번째 자리만 비교한다.
//       // 배열 숫자의 sort는 오름인지 내림인지 반드시 기재해줘야 한다

//       result.sort((a, b) => {
//           return a - b
//       })
//   }

//       // 문자열, 숫자 정렬
//       return a > b ? -1 : 1 // 내림차순
//       return a > b ? 1 : -1

function solution(array, commands) {
  const answer = [];

  for (let idx = 0; idx < commands.length; idx++) {
    const i = commands[idx][0];
    const j = commands[idx][1];
    const k = commands[idx][2];

    // array를 i번째부터 j번째까지 자른 결과 저장
    const result = array.slice(i - 1, j).sort((a, b) => {
      return a - b;
    });

    console.log(result[k - 1]);

    answer.push(result[k - 1]);
  }
  return answer;
}

// map을 사용해서

function solution2(array, commands) {
  const answer = commands.map((el) => {
    // console.log(el[0], el[1], el[2])
    const result = array.slice(el[0] - 1, el[1]).sort((a, b) => {
      return a - b;
    });
    // console.log(result, el[2])
    return result[el[2] - 1];
  });

  return answer;
}
