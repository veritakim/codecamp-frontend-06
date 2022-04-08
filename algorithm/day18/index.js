/*
1월 1일 금요일

0+ 1월 1일 : 금요일 (+0)
1+ 1월 2일 : 토요일 (+1)
2+ 1월 3일 : 일요알 (+2)
.
.
.
 */

const month = {
  1 : 31,
  2 : 29,
  3 : 31,
  4 : 30,
  5 : 31,
  6 : 30,
  7 : 31,
  8 : 31,
  9 : 30,
  10 : 31,
  11 : 30,
  12 : 31
}

const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]

function solution (a, b) {
  let answer = 0;

  for (let i = 1; i < a; i++) {
    // console.log(month[i])
      answer += month[i]
  }
    answer += b -1;
    
    return week[answer % 7] 
}

const month = {
  1 : 31,
  2 : 29,
  3 : 31,
  4 : 30,
  5 : 31,
  6 : 30,
  7 : 31,
  8 : 31,
  9 : 30,
  10 : 31,
  11 : 30,
  12 : 31
}

const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]

function solution2 (a, b) {
  let answer = new Array(a).fill(1).reduce((acc, cur, i) => {
                                // a = 5일때 1-5월까지
                                const mn = cur + i
                                return acc + (
                                    mn !== a
                                    // a월 이전일 때
                                    ? month[mn]
                                    // a월 일 때
                                    : b - 1
                                )
                            }, 0)
    return week[answer % 7]
}

function solution3 (a, b) {
  // new Date (year , month, day) 근데 month가 +1되어 나오기 때문에 -1 해줘야함
let date = new Date(2016, a - 1, b)
const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

return day[date.getDay()]

}