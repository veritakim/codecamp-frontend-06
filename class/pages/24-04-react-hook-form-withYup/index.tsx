
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styled from "@emotion/styled"

const schema = yup.object({
  email: yup.string()
            .email("이메일 형식이 아닙니다")
            .required("이메일은 필수 입력창입니다"), // required 안썼을 때 오류 메세지
  password: yup.string()
                .min(4, "비밀번호는 4자리 이상 입력해주세요")
                .max(15, "비밀번호는 최대 15자리입니다.")
                .required("비밀번호를 입력해주세요")
})  

interface IFormValues {
  email?: string
  password?: string
  constents?: string
}

interface IProps {
  isActive: boolean
}


const Error = styled.div`
  color: red;
  font-size: 12px;
`

const LoginBtn = styled.button`
background-color: ${(props: IProps) => (props.isActive ? "yellow" : "gray")};
`


export default function ReactHookForm () {

  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(schema), // 데이터를 입력할 때 오류 처리해줄 함수를 만들어줘라 
    mode: "onChange"
  })

  

  const onClickSubmit = (data: IFormValues) => {
    console.log(data)
  }

  return (

    <form onSubmit={handleSubmit(onClickSubmit)}>
      email : <input type="text" {...register("email")}/> 
      <Error>{formState.errors.email?.message}</Error>
      password :<input type="password" {...register("password")}/> 
      <Error>{formState.errors.password?.message}</Error>
      <LoginBtn isActive={formState.isValid}>로그인</LoginBtn>
    </form>
  )
}