// /board/new 로 접속할 수 있다.
import {MyPage, Wrapper, MyP, MyEmail} from '../../../styles/emotion'


export default function AAAPage() {


  return (
    //HTML 구역
    <MyPage>
      <Wrapper>
        <div>게시물 등록</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <MyP>아이디</MyP>
        <MyEmail type="text" />
        <MyP>비밀번호</MyP>
        <MyEmail type="text" />
      </Wrapper>
    </MyPage>
    
  )
}
