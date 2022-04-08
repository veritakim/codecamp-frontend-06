import { gql, useMutation } from "@apollo/client"
import { Modal } from "antd"
import { ChangeEvent, useRef, useState } from "react"
import { checkFileValidation } from "../../src/commons/libraries/validation"
import { IMutation,  IMutationUploadFileArgs } from "../../src/commons/types/generated/types"

const UPLOAD_FILE = gql`
  mutation uploadFile ($file: Upload!) {
    uploadFile(file: $file){
      url
    }
  }
`

export default function ImageValidationPage () {
  // useRef
  const fileRef = useRef<HTMLInputElement>(null)

  const [imgUrl, setImgUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)

  const onChangeFile = async (evnet: ChangeEvent<HTMLInputElement>) => {
    const file = evnet.target.files?.[0] 
    console.log(file)

    const isValid = checkFileValidation(file);
    if(!isValid) return; 

    try {
      const result = await uploadFile({variables: {file}})
      console.log(result.data?.uploadFile.url)
  
      setImgUrl(result.data?.uploadFile.url)
    } catch (error: any) {
      Modal.error({content: error.message})
    }
  }

  const onClickImg = () => {
    fileRef.current?.click();
  }

  return (
    <div>
      <div>이미지 업로드 연습하기</div>
      {/* input을 선택하는 태그를 */}
      <div style={{width: "150px", height: "150px", backgroundColor: "gray"}} onClick={onClickImg} >
        이미지 선택
      </div>
      <input style={{display: "none"}} type="file" onChange={onChangeFile} ref={fileRef}/>
      <img src={`https://storage.googleapis.com/${imgUrl}`}/>
    </div>
  )
}