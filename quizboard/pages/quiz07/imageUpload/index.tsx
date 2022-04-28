import { gql, useMutation } from "@apollo/client"
import { ChangeEvent, MouseEvent, useState } from "react"
import { IMutation, IMutationUploadFileArgs, IMutationCreateBoardArgs } from "../../../src/commons/types/generated/types"

const UPLOAD_FILE = gql`
  mutation uploadFile ($file: Upload!) {
    uploadFile(file: $file){
      url
    }
  }
`

export const CREATE_BOARD = gql`
  mutation createBoard ($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`

export default function ImageUploadPage () {
  const [writer, setWriter] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const [imgUrls, setImgUrls] = useState([""])
  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)

  const [files, setFiles] = useState<(File | undefined)[]>([undefined])

  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD)
  
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {
      alert("선택된 파일이 없습니다")
      return
    }

    const fileReader = new FileReader()

    fileReader.readAsDataURL(file)
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        const tempUrls = [data.target?.result]

        console.log(tempUrls)
        setImgUrls(tempUrls)

        setFiles([file])
      }
    }
  }

  const onChangeWriter =  (event) => {
    setWriter(event.target.value)
  }
  const onChangePassword =  (event) => {
    setPassword(event.target.value)
  }
  const onChangeTitle =  (event) => {
    setTitle(event.target.value)
  }
  const onChangeContents =  (event) => {
    setContents(event.target.value)
  }

  const onClickSubmit = async () => {
    const results = await uploadFile({variables: {file: files[0]}}) 

    const resultUrls = [results.data?.uploadFile.url]

    const results2 = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          title,
          contents,
          password,
          images: resultUrls
        }
      }
    })
  }
  
  return (

    <div>
      작성자 : <input type="text" onChange={onChangeWriter}/> <br/>
      비밀번호 : <input type="password" onChange={onChangePassword} /> <br/>
      제목 : <input type="text" onChange={onChangeTitle} /> <br/>
      내용 : <input type="text" onChange={onChangeContents} /> <br/>
      파일 : <input type="file" onChange={onChangeFile}/> <br/>
      <img src={imgUrls[0]} />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  )
}