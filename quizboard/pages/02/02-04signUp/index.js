import { useState } from "react";
import {ContainBox,
  RegisterBox,
  RegisterContent,
  RegisterHead,
  RegisterText,
  InputStyle,
  ConfirmBox,
  NumberContent,
  PhoneNumber,
  Dash,
  NumberConfirm,
  BlueFont,
  ConfirmBtn,
  NumberComplete,
  GenderRadio,
  Btn} from "../../../styles/02css/signup.js"

export default function SignUpPage () {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passWordError, setPassWordError] = useState("");

  const [checkPass, setCheckPass] = useState("");
  const [checkPassError, setCheckPassError] = useState("");

  const [color, setColor] = useState("red");

  function onChangeEmail (event) { 
      setEmail(event.target.value);
   }

  function onChangePass (event) {
    setPassword(event.target.value)
  }
  function onChangeCheckPass (event) { 
    setCheckPass(event.target.value)
  }
  function signCheck () {
    if(!email.includes("@")) {
      setEmailError("이메일 형식이 아닙니다.")
    } else {
      setEmailError(" ")
    }

    if(!password) {
      setPassWordError("비밀번호를 입력해주세요")
    } else {
      setPassWordError(" ")
    }
    
    if(password !== checkPass) {
      setCheckPassError("비밀번호가 다릅니다")
    } else {
      setCheckPassError(" ")
    }
  }



  return (
    <ContainBox>
      <RegisterBox>
        <RegisterContent>
          <RegisterHead>
            코드캠프 회원가입
          </RegisterHead>
          <RegisterText>
            <div>
              <InputStyle type="text" placeholder="이메일을 입력해 주세요." onChange={onChangeEmail} />
              <div style={{color}}>{emailError}</div>
            </div>
          </RegisterText>
          <RegisterText>
            <div>
              <InputStyle type="text" placeholder="이름을 입력해 주세요."/>
            </div>
          </RegisterText>
          <RegisterText>
            <div>
              <InputStyle type="password" placeholder="비밀번호를 입력해 주세요." onChange={onChangePass}  />
              <div style={{color}}>{passWordError}</div>
            </div>
          </RegisterText>
          <RegisterText>
            <div>
              <InputStyle type="password" placeholder="비밀번호를 다시 입력해 주세요." onChange={onChangeCheckPass} />
              <div style={{color}}>{checkPassError}</div>
            </div>
          </RegisterText>
          <RegisterText>
            <ConfirmBox>
              <NumberContent>
                <PhoneNumber id="phone1" type="text" maxlength="3" /> 
                <Dash></Dash>
                <PhoneNumber id="phone2" type="text" maxlength="4" /> 
                <Dash></Dash>
                <PhoneNumber id="phone3" type="text" maxlength="4" />
              </NumberContent>
              <NumberConfirm>
                <BlueFont>000000</BlueFont>
                <ConfirmBtn>인증번호 전송</ConfirmBtn>
              </NumberConfirm>
              <NumberComplete>
                <BlueFont>3 : 00</BlueFont>
                <ConfirmBtn >인증완료</ConfirmBtn>
              </NumberComplete>
            </ConfirmBox>
    
          </RegisterText>
          <GenderRadio>
            <input type="radio" name="gender" /> 여성 &nbsp;&nbsp;&nbsp;
            <input type="radio" name="gender" /> 남성
          </GenderRadio>
    
          <RegisterText>
            <input type="checkbox" /> 이용약관 개인정보 수집 및 이용, 마케팅 활용 선택에 모두 동의합니다.
          </RegisterText>
          <Btn onClick={signCheck}>가입하기</Btn>
        </RegisterContent>
      </RegisterBox>
    </ContainBox>
  )
} 