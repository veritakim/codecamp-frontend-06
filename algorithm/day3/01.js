// input1, input2에는 boolean 타입인 true, false가 입력됩니다.

// 둘 중에 하나라도 true라면 "true"

// 두 개 모두 false면 "false"라는 문구를 띄워주세요.

function boolean(input1, input2) {
	if(input1 || input2) {
      return console.log("true")
  } else {
    return console.log("false")
  }
}

boolean(true, false)
boolean(false, true) 
boolean(false, false)