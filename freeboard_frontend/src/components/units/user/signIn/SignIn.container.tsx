import { useMutation } from "@apollo/client";
// import { ChangeEvent, MouseEvent, useState } from "react";
import SignInPresenter from "./SignIn.presenter";
import { CREATE_USER } from "./SignIn.query";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface ISignProps {
 name: string;
 email: string;
 password: string; 
}

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .matches(/^(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/,
                "영문+숫자를 조합 8~16자리의 비밀번호를 입력해주세요.")
    .required("비밀번호는 필수 입력 사항입니다."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null],'비밀번호가 일치하지 않습니다.'),  
  name: yup
    .string()
    .matches(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, "한글만 입력 가능합니다")
    .required("이름은 필수 입력 사항입니다.")
});

export default function SignInContainer() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  }
  )

  const [createUser] = useMutation(CREATE_USER)

  const onClickSubmit = async (data: ISignProps) => {
    if(!data.email && !data.password && !data.name) {
      alert("정보를 입력하세요")
      return;
    } 
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name
          }
        }
      })

      alert("회원가입이 완료되었습니다.")

    } catch(error: any) {
      alert(error.message)
    } 
  }
  
  return (
  <SignInPresenter 
    handleSubmit={handleSubmit}
    register={register}
    formState={formState}
    onClickSubmit={onClickSubmit}
  />)
}
