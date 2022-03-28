export default function TypeScriptPage () {

  interface IProfile {
    name: string,
    age: number,
    school: string,
    hobby?: string
  }

  // pick type
  type Mytype1 = Pick<IProfile, "name" | "age">

  // omit type
  type Mytype2 = Omit<IProfile, "school">

  // partail
  type MyType3 = Partial<IProfile>

  // Required
  type MyType4 = Required<IProfile>

  type ZZZ = "aaa" | "qqqq" | "rrr" // Union type
  
  // let apple: ZZZ
  // apple = ""

  // Record type
  type MyType5 = Record<ZZZ, IProfile> 



  // ---- 추가(선언병합) ----

  interface IProfile {
    candy: number
  }


 
  return (
    <div>타입 스크립트 연습하기</div>
  )
}


