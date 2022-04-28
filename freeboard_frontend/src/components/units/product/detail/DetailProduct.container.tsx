import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userInfomationState } from "../../../../commons/store";
import DetailProductUi from "./DetailProduct.preseter";
import { FETCH_USED_ITEM } from "./DetailProduct.query";

export default function DetailProductContainer () {
  const router = useRouter()
  
  const [userInfo] = useRecoilState(userInfomationState)
  

  const {data} = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.productId
    }
  })
  
  const onClickUpdate = () => {
    router.push(`/product/${router.query.productId}/edit`)
  }

  const onClickBaket = (el:any) => () => {
    // alert("장바구니")
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]")
    const temp = baskets.filter((item) => (item._id === el._id))
    if( temp.length === 1) {
      alert("이미 담은 상품입니다")
      return
    }

    const { __typename, ...newEl } = el
    baskets.push(newEl)
    localStorage.setItem("baskets", JSON.stringify(baskets))
    alert("장바구니에 상품을 담았습니다")
  }

  const onClickBuy = (id: string) => () => {
    router.push(`/payment/${id}`)
  }


  return (
    <DetailProductUi 
      data={data}
      userInfo={userInfo}
      onClickUpdate={onClickUpdate}
      onClickBaket={onClickBaket}
      onClickBuy={onClickBuy}
    />
  )
}