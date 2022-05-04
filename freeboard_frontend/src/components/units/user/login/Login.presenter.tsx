import styled from "@emotion/styled"

const Wrapper = styled.div`
  width: 580px;
  height: 688px;
  background-color: #F8F8F8;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

const Inputdiv = styled.div`
  width: 100%;
  height: 306px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 14.52px;
  font-size: 30px;
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

const LoginBtn = styled.div`
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


export default function LoginPresenter (props: any) {

  return (
    <Wrapper>
      <form onClick={props.onClickSubmit}>
      <LoginTitle>로그인</LoginTitle>
          <Inputdiv>
            <InputStyle type="text" onKeyUp={props.onChangeEmail} placeholder="이메일" {...props.register("email")} />
            <Error>{props.formState.errors.email?.message}</Error>
          {/* </Inputdiv>
          
          <Inputdiv> */}
            <InputStyle type="password" onKeyUp={props.onChangePassword} placeholder="비밀번호" {...props.register("password")} />
            <Error>{props.formState.errors.password?.message}</Error>
          </Inputdiv>

          <BtnArea>
            <LoginBtn>로그인 하기</LoginBtn>
          </BtnArea>
      </form>
    </Wrapper>
  )
}