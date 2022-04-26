import { gql, useMutation } from "@apollo/client"
import { Modal } from "antd"
import { ChangeEvent, useState } from "react"
import { IMutation, IMutationUploadFileArgs } from "../../src/commons/types/generated/types"

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


export default function ImageUploadPreviewPage() {
  const [imgUrl, setImgUrl] = useState("")
  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)
  const [file1, setFile1] = useState<File>()

  const [createBoard] = useMutation(CREATE_BOARD)

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    // 임시 url 만들어주기
    const file = event.target.files?.[0]
    if (!file) {
      alert("파일이 없습니다")
      return 
    }

    const fileReader = new FileReader()
    // file을 url형태로 만들어준다
    fileReader.readAsDataURL(file)
    // 읽어진 결과물이 들어온다
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result) 
        setImgUrl(data.target?.result )
        setFile1(file)
      }
    }
  } 
    
  const onClickSubmit = async () => {
    // createBoard 파일 업로드도 같이 할 것이다.
    try {
      const result1 = await uploadFile({variables: {file: file1}})
      const imageUrl = result1.data?.uploadFile.url

      const result2 = await createBoard( {
        variables: { 
          createBoardInput: {
            writer: "짱구",
            password: "0205",
            title: "초코비 주세요",
            contents: "배고프다. 초코비 주세요",
            images: [imageUrl]
          }
          }
      })
      console.log(result2.data.createBoard._id)

    } catch (error: any) {
      Modal.error({content: error.message})
    }
    
  }

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  )
}