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
  const [imgUrls, setImgUrls] = useState(["", "", ""])
  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)
                                  // File또는 undefined가 들어있는 배열
  const [files, setFiles] = useState<(File | undefined)[]>([undefined, undefined, undefined])

  const [createBoard] = useMutation(CREATE_BOARD)


  const onChangeFile = (number: number)=> (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {
      alert("파일이 없습니다")
      return 
    }

    const fileReader = new FileReader()

    fileReader.readAsDataURL(file)
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        const tempUrls = [...imgUrls]
        tempUrls[number] = data.target?.result

        setImgUrls(tempUrls)

        const tempFiles = [...files]
        tempFiles[number] = file
        setFiles(tempFiles)
      }
    }
  } 
    
  const onClickSubmit = async () => {
    // createBoard 파일 업로드도 같이 할 것이다.
    try {
      const results = await Promise.all(
        files.map((el) => {
          return el && uploadFile({variables: { file: el }}) 
        })
      )

      const resultUrls = results.map((el) => {
        return el?.data ? el?.data?.uploadFile.url : ""
      })


      // files.map((el) => {
        // return el && uploadFile({variables: { file: el }}) 
        // return el ? uploadFile({variables: { file: el }}) : 
        // if(el) {
        //   return uploadFile({variables: { file: el }})
        // } else {
        //   return undefined
        // }
      // })

      /*
      await uploadFile({variables: {file: files[0]}})
      await uploadFile({variables: {file: files[1]}})
      await uploadFile({variables: {file: files[2]}})
      
      const imageUrl = result1.data?.uploadFile.url
      */


      

      const result2 = await createBoard( {
        variables: { 
          createBoardInput: {
            writer: "짱구",
            password: "0205",
            title: "초코비 주세요",
            contents: "배고프다. 초코비 주세요",
            images: resultUrls
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
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imgUrls[0]} />
      <img src={imgUrls[1]} />
      <img src={imgUrls[2]} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  )
}