// 점수에 따른 등급
function grade (score) {
  console.log(score)
  // 예외 처리를 먼저 해주자
  /*
  if(score > 100 || score < 0) {
    return "잘못된 점수입니다."
  } else if (score >= 90 && score <= 100) {
    return "A"
  } else if (score >= 80 && score <= 89) {
    return "B"
  } else if (score >= 70 && score <= 79) {
    return "C"
  } else if (score >= 60 && socre <= 69) {
    return "D"
  } else {
    return "F"
  }
  */
  if(score > 100 || score < 0) {
    return "잘못된 점수입니다."
  } else if (score >= 90) {
    return "A"
  } else if (score >= 80) {
    return "B"
  } else if (score >= 70) {
    return "C"
  } else if (score >= 60) {
    return "D"
  } else {
    return "F"
  }
}

grade(100)