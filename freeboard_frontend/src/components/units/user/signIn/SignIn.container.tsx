import { useMutation } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import SignInPresenter from "./SignIn.presenter";
import { CREATE_USER } from "./SignIn.query";

export default function SignInContainer() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [createUser] = useMutation(CREATE_USER)

  const onChangeEmail = (event:ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const onChangePassword = (event:ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  const onChangeName = (event:ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const onClickSubmit = async (event:MouseEvent<HTMLButtonElement>) => {
    if(!email && !password && !name) {
      alert("정보를 입력하세요")
      return;
    } 
    try {
      const result = await createUser({
        variables: {
          createUserInput: {email,
          password,
          name
          }
        }
      })

      alert("회원가입 성공")

    } catch(error) {
      alert(error.message)
    } 


  }
  
  return (
  <SignInPresenter 
    onChangeEmail={onChangeEmail}
    onChangePassword={onChangePassword}
    onChangeName={onChangeName}
    onClickSubmit={onClickSubmit}
  />)
}
