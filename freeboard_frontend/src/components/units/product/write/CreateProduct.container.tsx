import CreateProductUi from "./CreateProduct.presenter";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM, UPLOAD_FILE } from "./CreateProduct.query";
import { IMutation, IMutationCreateUseditemArgs } from "../../../../commons/types/generated/types";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { checkFileValidation } from "../../../../commons/library/validation";

const schema = yup.object({
  name: yup.string()  
            .required("상품명을 입력하세요"),
  remarks: yup.string()
              .required("한줄 요약을 입력하세요"),
  contents: yup.string()
                .required("상품 설명을 입력하세요")
  
})


export default function CreateProductContainer (props) {
  const {register, handleSubmit, formState, setValue, trigger, watch, getValues} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  })

  const [createUseditem] = useMutation<Pick<IMutation, 'createUseditem'>, IMutationCreateUseditemArgs>(CREATE_USEDITEM)
  const [fileUrls, setFileUrls] = useState([""])
  const router = useRouter()
 
  // const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)
  const [uploadFile] = useMutation(UPLOAD_FILE)
  const fileRef = useRef<HTMLInputElement>(null)
  // const [imgData, setImgDate] = useState([""]);

  const onClickImage = () => {
    fileRef.current?.click();
  }
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    // console.log(file)

    const isValid = checkFileValidation(file);
    if(!isValid) return;

    try{
      const result = await uploadFile({variables: {file}})
      
      setFileUrls(prev => [...prev, result.data?.uploadFile.url])
    } catch (error: any) {
      alert(error.message)
    }
  }


  const onClickSubmit = async(data:any) => {
    // 태그를 분리 시켜준다, 배열로 만들어 주기 위해
    const {tags, price, ...rest} = data 
    // // console.log("tags", tags.split("#"))
    const tagsArr = tags.split(" ")
    console.log(data)
    
    console.log("tagsArr", tagsArr)
    
    try {
      const result = await createUseditem({
        variables: {
        createUseditemInput: {
          ...rest,
          price: Number(price),
          tags: tagsArr,
          images: fileUrls
          }
        }
      })

      alert("게시물이 등록되었습니다")
      router.push(`/product/${result.data?.createUseditem._id}`)

    } catch (error: any) {
      alert(error.message)
    }
    

  }

  const onChangeContents = (value: string) => {
    console.log(value)
    setValue("contents", value === "<p><br></p>" ? "" : value)
    trigger("contents")
  }

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);



  // 주소
  

  // function onChangeAddrDetail(event: ChangeEvent<HTMLInputElement>) {}


  const onClickUpdate = (data) => {}

  return <CreateProductUi
            handleSubmit={handleSubmit}
            onClickSubmit={onClickSubmit}
            formState={formState}
            register={register}
            // onChangeFileUrls={onChangeFileUrls}
            isEdit={props.isEdit}
            data={props.data}
            onClickUpdate={onClickUpdate}
            onChangeContents={onChangeContents}
            onClickImage={onClickImage}
            onChangeFile={onChangeFile}
            fileUrls={fileUrls}
            fileRef={fileRef}
            watch={watch}
            getValues={getValues}
            />
}