export default function TypeScriptPage () {
  let aaa = "hey~~"
  // aaa = 3

  
  
    // 타입명시
    let bbb: string = "nice to meet you"
  
    // 문자타입
    let ccc: string
    ccc = "cicici" 
    // ccc = 3

    // 숫자타입
    let ddd: number = 10
    // ddd = "aassdd"

    // boolean
    let eee: boolean = true
    eee = false
    // eee = "false" // 단어는 false지만 문자열 안에 하나라도 있다면 true다
    
    // 배열타입
    // let fff: number[] = [1, 2, 3, 4, 5, "ㅎ2"]  // number만 들어가는 배열

    // 객체 타입
    /*
    let profile = {
      name: "철수",
      age: 8,
      school: "다람쥐초"
    }
    profile.age = "8살" // 타입추론
    */
   
   interface IProfile {
     name: string
     age: string | number
     school: string
     hobby?: string
    }
    
    let profile: IProfile = {
      name: "철수",
      age: 8,
      school: "다람쥐초"
    }
    profile.age = "8살" // 타입추론

    // 만약 school을 뺀다면 안된다. 반드시 interface에 지정한 것들을 사용해야 한다.
    // 있어도 되고 없어도 되는 것은 ?를 붙여주면 된다. hobby?: string


    // 함수타입
    const add = (money1: number, money2: number, unit: string): string => {
      return money1 + money2 + unit
    }
    add(1000, 2000, "원")
  return (
    <div>타입 스크립트 연습하기</div>
  )
}


