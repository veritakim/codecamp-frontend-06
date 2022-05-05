import styled from "@emotion/styled"

const Wrapper = styled.div`
  width: 680px;
  height: 688px;
  background-color: #F8F8F8;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

const Inputdiv = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 27px 0 27px;
  margin-top: 10px;
  margin-bottom: 14.52px;
  font-size: 24px;
`

const InputStyle = styled.input`
  width: 480px;
  height: 77.48px;
  border: none;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  font-size: 18px;
  color: #6B6B6B;
  padding-left: 20px;
  margin-top: 10px;
`
const Error = styled.div`
  width: 480px;
  color: #EF3030;
  font-size: 16px;
  margin-bottom: 35px;
`

const LoginTitle = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 30px;
  font-weight: 700;
`

const BtnArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`

const BtnStyle = styled.div`
  width: 120px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #918d87;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`


export default function SignInPresenter (props: any) {

  return (
    <Wrapper>
      <form onClick={props.handleSubmit(props.onClickSubmit)}>
        <h1>회원가입</h1>
        <Inputdiv>아이디 <InputStyle type="text" placeholder="이메일 아이디를 @까지 정확하게 입력하세요" {...props.register("email")} /></Inputdiv>
        <Error>{props.formState.errors.email?.message}</Error>
        <Inputdiv>비밀번호 <InputStyle type="password" placeholder="영문+숫자 조합 8~16자리를 입력해주세요." {...props.register("password")} /></Inputdiv>
        <Error>{props.formState.errors.password?.message}</Error>
        <Inputdiv>비밀번호 확인 <InputStyle type="password"  placeholder="영문+숫자 조합 8~16자리를 입력해주세요." {...props.register("passwordConfirm")} /></Inputdiv>
        <Error>{props.formState.errors.passwordConfirm?.message}</Error>
        <Inputdiv>이름 <InputStyle type="text" placeholder="Ex)홍길동" {...props.register("name")} /></Inputdiv>
        <Error>{props.formState.errors.name?.message}</Error>

        <BtnStyle>회원가입</BtnStyle>
        <BtnStyle onClick={props.onClickCancel}>취소</BtnStyle>
        <div>
          <span>이미 아이디가 있으신가요?</span>
          <span>로그인</span>
        </div>
      </form>
  </Wrapper>
  )
}