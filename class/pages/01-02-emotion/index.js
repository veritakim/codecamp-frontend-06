import {MyLogin, MyP, MyEmail} from '../../styles/emotion'


export default function AAAPage() {
  // css 변수 선언시 맨 첫 자는 반드시 대문자여야한다.


  // JS 구역

  

  return (
    //HTML 구역
    <MyLogin>
      로그인
      <MyP>아이디</MyP>
      <MyEmail type="text" />
      <MyP>비밀번호</MyP>
      <MyEmail type="text" />

      {/* 이미지는 public 폴더에서 알아서 찾는다 */}
      {/* <img src="/lotto.png" /> */}
    </MyLogin>
    
  )
}
