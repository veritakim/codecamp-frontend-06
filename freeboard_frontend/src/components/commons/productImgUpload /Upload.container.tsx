import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import UploadPresenter from "./Upload.presenter";
import { UPLOAD_FILE } from "./Upload.query";
import { IUploadProps } from "./Upload.types";
import { checkValidationImage } from "./Upload.validation";

export default function UploadContainer (props: IUploadProps) {

  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imgData, setImgDate] = useState([""]);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  /*
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  */

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    // console.log(file)

    const isValid = checkValidationImage(file);
    if(!isValid) return;

    try{
      const result = await uploadFile({variables: {file}})
      
      setImgDate(prev => [...prev, result.data?.uploadFile.url])
    } catch (error: any) {
      alert(error.message)
    }
  }

  
  return <UploadPresenter 
  fileRef={fileRef}
  fileUrl={props.fileUrl}
  defaultFileUrl={props.defaultFileUrl}
  imgData={imgData}
  onClickUpload={onClickUpload}
  onChangeFile={onChangeFile} />
}