import { gql, useMutation } from "@apollo/client"
import 'react-quill/dist/quill.snow.css';
import styled from "@emotion/styled"
import { create } from "lodash"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import React from "react"
import { useForm } from "react-hook-form"

const CREATE_BOARD = gql`
  mutation createBoard ($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  } 

`

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false}) 
const ReactQuillDiv = styled(ReactQuill)`
  width: 800px;
  height: 500px;
`

export default function EditorPage () {
  const [ createBoard ] = useMutation(CREATE_BOARD)
  const router = useRouter()

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange"
  })

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value)

    trigger("contents")
  }

  const onClickSubmit = async (data) => {
    if (!data.writer && !data.password && !data.title && !data.contents) {
      alert("모두 입력해주세요")
      return
    }

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents
        }
      }
    })

    alert("글이 등록되었습니다")
    router.push(`/quiz06/editor/detail/${result.data.createBoard._id}`)
  }


  return (
    <div>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <div>작 성 자 : <input type="text" {...register("writer")}/> </div>
        <div>비밀번호 : <input type="password" {...register("password")} /> </div>
        <div>제   목 : <input type="text"  {...register("title")} /> </div>
        <ReactQuillDiv onChange={onChangeContents} /> <br />
        <button>등록하기</button>
      </form>

    </div>
  )
}