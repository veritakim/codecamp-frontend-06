import { gql, useMutation } from "@apollo/client"
import { Modal } from "antd"
import { ChangeEvent, useState } from "react"
import { IMutation,  IMutationUploadFileArgs } from "../../src/commons/types/generated/types"

const UPLOAD_FILE = gql`
  mutation uploadFile ($file: Upload!) {
    uploadFile(file: $file){
      url
    }
  }
`

export default function ImageUploadPage () {

  const [imgUrl, setImgUrl] = useState<string | undefined>("");
  // const [imgUrl, setImgUrl] = useState("");

  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)
  const onChangeFile = async (evnet: ChangeEvent<HTMLInputElement>) => {
    // const file = evnet.target.files&& evnet.target.files[0]
    const file = evnet.target.files?.[0] // 옵셔널 체이닝으로 있으면 
    console.log(file)

    try {
      // upload file api 요청 backend06 playground
      const result = await uploadFile({variables: {file}})
      console.log(result.data?.uploadFile.url)
  
      setImgUrl(result.data?.uploadFile.url)

    } catch (error: any) {
      Modal.error({content: error.message})
    }


  }

  return (
    <div>
      <div>이미지 업로드 연습하기</div>
      <input type="file" onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
      {/* <input type="file" onChange={onChangeFile} multiple/>  여러개 하려면 뒤에 멀티플 붙여라 */}
    </div>
  )
}