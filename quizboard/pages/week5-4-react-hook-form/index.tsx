import { useForm } from "react-hook-form"
import styled from '@emotion/styled'
import { useState } from "react"
import { gql, useMutation } from "@apollo/client"

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

export default function HookFormPage () {
  const {register, handleSubmit} = useForm()
  const [writerError, setWriterError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [titleError, setTitleError] = useState("")
  const [contentsError, setContentsError] = useState("")
  const [createBoard] = useMutation(CREATE_BOARD)


  const onClickSubmit = async (data: IDataProps) => {
    if(!data.writer){setWriterError("작성자를 기입하세요")}
    if(!data.password){setPasswordError("비밀번호를 기입하세요")}
    if(!data.title){setTitleError("제목을 기입하세요")}
    if(!data.contents){setContentsError("내용을 기입하세요")}

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

  register(("writer"), {
    onChange: (e) => { if (e.target.value) setWriterError("")}
  })
  register(("password"), {
    onChange: (e) => { if (e.target.value) setPasswordError("")}
  })
  register(("title"), {
    onChange: (e) => { if (e.target.value) setTitleError("")}
  })
  register(("contents"), {
    onChange: (e) => { if (e.target.value) setContentsError("")}
  })


  return (
    <div>
      <form onClick={handleSubmit(onClickSubmit)}>
          작성자 : <input type="text" {...register("writer") } /> <br/>
          <Error>{writerError}</Error>

          비밀번호 : <input type="password" {...register("password")}/><br/>
          <Error>{passwordError}</Error>

          제목: <input type="text" {...register("title")}/><br/>
          <Error>{titleError}</Error>

          내용:<input type="text" {...register("contents")} /><br/>
          <Error>{contentsError}</Error>
          <button>등록하기</button>
      </form>
    </div>
  )
}