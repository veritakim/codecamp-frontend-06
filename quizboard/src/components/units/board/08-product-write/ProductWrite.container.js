import WriteProductUi from "./ProductWrite.Presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.queris";
import {useState} from 'react'
import {useMutation} from '@apollo/client'
import { useRouter } from "next/router";


export default function CreateProductWrite (props) {
  
  const [createProductApi] = useMutation(CREATE_PRODUCT);
  const [updateProductApi] = useMutation(UPDATE_PRODUCT);

  const [seller, setSeller] = useState("")
  const [name, setName] = useState("")
  const [detail, setDetail] = useState("")
  const [price, setPrice] = useState("")

  const [isActive, setIsActive] = useState(true)

  const router = useRouter()

  const onChangeSeller = (event) => {
    setSeller(event.target.value)

    if(event.target.value && name && detail && price) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  const onChangeName = (event) => {
    setName(event.target.value)
    if(seller && event.target.value && detail && price) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  const onChangeDetail = (event) => {
    setDetail(event.target.value)
    
    if(seller && name && event.target.value && price) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }
  
  const onChangePrice = (event) => {
    setPrice(event.target.value)

    if(seller && name && detail && event.target.value) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }
  

  // 등록하기 버튼
  const onClickProduct = async () => {
    try {
      const result = await createProductApi ({
        variables: {
          seller: seller,
          createProductInput: {
            name: name,
            detail: detail,
            price: Number(price)
          }
        }
      })

      router.push(`/day8-product/${result.data.createProduct._id}`)
    } catch (error) {
      console.log(error.messege)
    }

  }

  //수정하기 버튼
  const onClickEdit = async () => {
    try {
      const result = await updateProductApi ({
        variables: {
          productId: router.query.productId,
          updateProductInput: {
            name: name,
            detail: detail,
            price: Number(price)
          }
        }
      }) 
      console.log(result);
      router.push(`/day8-product/${result.data.updateProduct._id}`)

    } catch (error) {
      console.log(error.messege)
    }

  }





  return (
    <WriteProductUi 
    onChangeSeller = {onChangeSeller}
    onChangeName = {onChangeName}
    onChangePrice = {onChangePrice}
    onChangeDetail = {onChangeDetail}
    onClickProduct = {onClickProduct}
    onClickEdit = {onClickEdit}
    isActive = {isActive}
    isEdit = {props.isEdit}
    />
  )

}