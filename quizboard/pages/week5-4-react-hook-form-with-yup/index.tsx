import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import styled from '@emotion/styled'
import { useState } from "react"
import { gql, useMutation } from "@apollo/client"
import * as yup from 'yup'
import Input01 from "../../src/components/commons/inputs"
import Button01 from "../../src/components/commons/buttons/01"

interface IDataProps {
  writer: string
  title: string
  password: string
  contents: string
}

const Error = styled.div`
  color: red;
  font-size: 15px;
`

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`

const schema = yup.object({
  writer: yup.string()
              .max(5, "5글자 이내로 입력해주세요")
              .required("작성자는 필수 입력값입니다"),
  password: yup.string()
                .required("비밀번호는 필수 입력값입니다")
                .matches(/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8}$/,
                "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내여야합니다."),
  title: yup.string()
            .max(100, "제목은 100자 이내로 입력해주세요")
            .required("제목을 입력해주세요"),
  contents: yup.string()
                .max(1000, "내용은 1000자 이내로 작성해주세요") 
                .required("내용을 입력해주세요")                    
})

export default function HookFormPage () {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  }
  )

  const [createBoard] = useMutation(CREATE_BOARD)
  
  const onClickSubmit = async (data: IDataProps) => {
    if(data.writer && data.password && data.title && data.contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: data

          }
        })

        alert("등록완료")
        console.log(result.data.createBoard)

      } catch (error) { 
        alert(error.message)
      }

    }
  }

  return (
    <div>
      <form onClick={handleSubmit(onClickSubmit)}>
          작성자 : <Input01 type="text" register={register("writer")} /> <br/>
          <Error>{formState.errors.writer?.message}</Error>

          비밀번호 : <Input01 type="password" register={register("password")}/><br/>
          <Error>{formState.errors.password?.message}</Error>

          제목: <Input01 type="text" register={register("title")}/><br/>
          <Error>{formState.errors.title?.message}</Error>

          내용:<Input01 type="text" register={register("contents")} /><br/>
          <Error>{formState.errors.contents?.message}</Error>
          <Button01 isEdit={false} />
      </form>
    </div>
  )
}