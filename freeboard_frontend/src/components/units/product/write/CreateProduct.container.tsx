import CreateProductUi from "./CreateProduct.presenter";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./CreateProduct.query";
import { IMutation, IMutationCreateUseditemArgs } from "../../../../commons/types/generated/types";
import { useEffect, useState } from "react";
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

  const router = useRouter()

  const [hashArray, setHashArray] = useState<string[]>([])

  console.log(props.data)

  const [createUseditem] = useMutation<Pick<IMutation, 'createUseditem'>, IMutationCreateUseditemArgs>(CREATE_USEDITEM)
  const [updateUseditem] = useMutation(UPDATE_USEDITEM)
  
  const [fileUrls, setFileUrls] = useState(["", "", ""])
  const [useditemAddress, setUseditemAddress] = useState({
    zipcode: "",
    address: "",
    addressDetail: ""
  })

  const [map, setMap] = useState({
    lat: 0.0,
    lng: 0.0
  })

  const onKeyUpHash = (event: any) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArray([...hashArray, "#" + event.target.value])
      event.target.value = ""
    }

    console.log(hashArray)
  }

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onChangeContents = (value: string) => {
    console.log(value)
    setValue("contents", value === "<p><br></p>" ? "" : value)
    trigger("contents")
  }

  // 상품 등록
  const onClickSubmit = async(data:any) => {
    const {price, ...rest} = data 

    try {
      const result = await createUseditem({
        variables: {
        createUseditemInput: {
          ...rest,
          price: parseInt(price),
          tags: hashArray,
          images: fileUrls,
          useditemAddress: {
            ...useditemAddress,
            ...map
          }
          }
        }
      })

      alert("상품이 등록되었습니다")
      router.push(`/product/${result.data?.createUseditem._id}`)

    } catch (error: any) {
      console.log(error)
    }
  }

    useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  

  // 수정
  const onClickUpdate = async (data) => {
    const updateVariables = {
      name: data.name ? data.name : props.data?.name,
      remarks: data.remarks ? data.remarks : props.data?.remarks,
      contents: data.contents ? data.contents : props.data?.contents,
      price: data.price ? parseInt(data.price) : parseInt(props.data?.price),
      tags: !hashArray[0] ? props.data?.fetchUseditem.tags : hashArray,
      images: fileUrls
    };

    const updateAddress = {
      zipcode: useditemAddress.zipcode
          ? useditemAddress.zipcode
          : props.data?.fetchUseditem.useditemAddress.zipcode,
        address: useditemAddress.address
          ? useditemAddress.address
          : props.data?.fetchUseditem.useditemAddress.address,
        addressDetail: useditemAddress.addressDetail
          ? useditemAddress.addressDetail
          : props.data?.fetchUseditem.useditemAddress.addressDetail,
        lat: map.lat ? map.lat : props.data?.fetchUseditem.useditemAddress.lat,
        lng: map.lng ? map.lng : props.data?.fetchUseditem.useditemAddress.lng
    }

    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: updateVariables.name,
            remarks: updateVariables.remarks,
            contents: updateVariables.contents,
            price: updateVariables.price,
            tags: updateVariables.tags,
            images: updateVariables.images,
            useditemAddress: {
              ...updateAddress
            }
          },
          useditemId: String(router.query.productId),
        }
      });
      alert("상품이 수정되었습니다.");
      router.push(`/product/${router.query.productId}`);

    } catch (e) {
      alert(e.message);
    }
  };

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
            onChangeFileUrls={onChangeFileUrls}
            />
}