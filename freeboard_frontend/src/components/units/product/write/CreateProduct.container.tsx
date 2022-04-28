import CreateProductUi from "./CreateProduct.presenter";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM } from "./CreateProduct.query";
import { IMutation, IMutationCreateUseditemArgs } from "../../../../commons/types/generated/types";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

const schema = yup.object({
  name: yup.string()  
            .required("상품명을 입력하세요"),
  remarks: yup.string()
              .required("한줄 요약을 입력하세요"),
  contents: yup.string()
                .required("상품 설명을 입력하세요")
  
})


export default function CreateProductContainer (props: any) {
  const {register, handleSubmit, formState, setValue, trigger, watch, getValues, reset} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  })

  const [hashArray, setHashArray] = useState<string[]>([])

   const onKeyUpHash = (event: any) => {
    // keyCode의 32는 space
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArray([...hashArray, "#" + event.target.value])
      event.target.value = ""
    }

    console.log(hashArray)
  }

  const [createUseditem] = useMutation<Pick<IMutation, 'createUseditem'>, IMutationCreateUseditemArgs>(CREATE_USEDITEM)
  const [fileUrls, setFileUrls] = useState<(File | undefined)[]>([undefined, undefined, undefined])
  const [useditemAddress, setUseditemAddress] = useState({
    zipcode: "",
    address: "",
    addressDetail: ""
  })

  const [map, setMap] = useState({
    lat: 0.0,
    lng: 0.0
  })


  const onClickSubmit = async(data:any) => {
    const {tags, price, ...rest} = data 

    const tagsArr = tags.split(" ")
    console.log(data)
    
    console.log("img", fileUrls)
    
    /*
    try {
      const result = await createUseditem({
        variables: {
        createUseditemInput: {
          ...rest,
          price: Number(price),
          tags: tagsArr,
          images: fileUrls,
          useditemAddress: {
            ...useditemAddress,
            ...map
          }
          }
        }
      })
      

      alert("게시물이 등록되었습니다")
      router.push(`/product/${result.data?.createUseditem._id}`)

    } catch (error: any) {
      alert(error.message)
    }
    */
    

  }

  const onChangeContents = (value: string) => {
    console.log(value)
    setValue("contents", value === "<p><br></p>" ? "" : value)
    trigger("contents")
  }

  // useEffect(() => {
  //   if (props.data?.fetchUseditem.images?.length) {
  //     setFileUrls([...props.data?.fetchUseditem.images]);
  //   }
  // }, [props.data]);



  // 주소
  

  function onChangeAddrDetail(event: ChangeEvent<HTMLInputElement>) {
  }
  const onClickUpdate = (data) => {}

  return <CreateProductUi
            handleSubmit={handleSubmit}
            onClickSubmit={onClickSubmit}
            formState={formState}
            register={register}
            isEdit={props.isEdit}
            data={props.data}
            useditemAddress={useditemAddress}
            setUseditemAddress={setUseditemAddress}
            setMap={setMap}
            onClickUpdate={onClickUpdate}
            onChangeContents={onChangeContents}
            fileUrls={fileUrls}
            setFileUrls={setFileUrls}
            watch={watch}
            getValues={getValues}
            reset={reset}
            hashArray={hashArray}
            onKeyUpHash={onKeyUpHash}
            />
}