// 입력되는 달(month)에 따라 각 달에 며칠이 있는지 보여주는 함수를 만들려고 합니다.

// 각 조건에 해당하는 알맞은 값을 입력해주세요.


  // 객체를 이용해서도 할 수 있다.
  function days (month) {
    const obj = {
      1: 31,
      2: 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31
    }
    console.log(obj[month])
  }

  days(1) // 31
  days(2) // 28
  days(11) // 30