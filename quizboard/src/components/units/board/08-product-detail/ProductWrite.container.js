import { FETCH_PRODUCT } from './ProductWrite.queris'
import {useMutation} from '@apollo/client'
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router";


export default function DetailProductPage (props) {
  
  
  const router = useRouter()
  
  const {data} = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.productId
    }
  })
  
  console.log(data);
  
  //수정하기 버튼
  const onClickEdit = () => {
    router.push(`/day8-product/${router.query.productId}/edit`)
  }



  return (
    <div>
      <div>작성자: {data?.fetchProduct.seller}</div>
      <div>상품 : {data?.fetchProduct.name}</div>
      <div>가격 : {data?.fetchProduct.price}</div>
      <div>내용 : {data?.fetchProduct.detail}</div>
      <button productId={data?.fetchProduct._id} onClick={onClickEdit}>수정하기</button>
    </div>
  )

}