import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import UploadPresenter from "./Upload.presenter";
import { UPLOAD_FILE } from "./Upload.query";
import { IUploadProps } from "./Upload.types";
import { checkValidationImage } from "./Upload.validation";
import {v4 as uuid} from 'uuid'

export default function UploadContainer (props: IUploadProps) {

  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imgUrls, setImgUrls] = useState(["", "", ""])
  const [isLoading, setIsLoading] = useState(false)

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  /*
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    const isValid = checkValidationImage(file);
    if(!isValid) return;

    try{
      const result = await uploadFile({variables: {file}})
      console.log("result", result)
      props.onChangeFileUrls(result.data?.uploadFile.url, props.index);
      setImgData(prev => [...prev, result.data?.uploadFile.url])
      console.log("22", imgData)
    } catch (error: any) {
      alert(error.message)
    }
  }
  */

  const onChangeFile = (number: number)=> (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    // console.log(event.target.files)
    // props.setFileUrls("ㅎㅎㅎㅎ")

    if (!file) {
      alert("파일이 없습니다")
      return 
    }

    const isValid = checkValidationImage(file);
    if(!isValid) return;

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        const tempUrls = [...imgUrls]
        tempUrls[number] = data.target?.result
        setImgUrls(tempUrls) 
        
        // setIsLoading(true)
        // if (isLoading === true) {
          // props.setFileUrls(["ggg"])
          // const fileArr = [...props.fileUrls]
          // fileArr[number] = file
          // props.setFileUrls(fileArr)
        // }
        
      }
    }
} 



  
  return (
    <>
    {imgUrls.map((el, i) => (
      <UploadPresenter 
         key={uuid()}
         el={el}
         onClickUpload={onClickUpload}
         onChangeFile={onChangeFile}
         fileRef={fileRef}
         i={i}
      />
      
    ))}
    </>
  )
}