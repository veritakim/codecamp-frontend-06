import CreateProductUi from "./CreateProduct.presenter";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM } from "./CreateProduct.query";
import { IMutation, IMutationCreateUseditemArgs } from "../../../../commons/types/generated/types";
import { useState } from "react";
import { useRouter } from "next/router";

const schema = yup.object({
  name: yup.string()
            .required("상품명을 입력하세요"),
  remarks: yup.string()
              .required("한줄 요약을 입력하세요"),
  contents: yup.string()
                .required("상품 설명을 입력하세요")
  
})

export default function CreateProductContainer () {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  })

  const [createUseditem] = useMutation<Pick<IMutation, 'createUseditem'>, IMutationCreateUseditemArgs>(CREATE_USEDITEM)
  const [fileUrls, setFileUrls] = useState(["", "", ""])
  const router = useRouter()

  const onClickSubmit = async(data:any) => {
    // 태그를 분리 시켜준다, 배열로 만들어 주기 위해
    const {tags, price, ...rest} = data 
    // console.log("tags", tags.split("#"))

    const tagsArr = tags.split("#")
    

    try {
      const result = await createUseditem({
        variables: {
        createUseditemInput: {
          ...rest,
          price: Number(price),
          tags: tagsArr
          }
        }
      })

      alert("게시물이 등록되었습니다")
      router.push(`/product/${result.data?.createUseditem._id}`)

    } catch (error: any) {
      alert(error.message)
    }

  }


  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };


  return <CreateProductUi
            handleSubmit={handleSubmit}
            onClickSubmit={onClickSubmit}
            formState={formState}
            register={register}
            onChangeFileUrls={onChangeFileUrls}
            />
}