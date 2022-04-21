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


  return (
    <DetailProductUi 
      data={data}
      userInfo={userInfo}
      onClickUpdate={onClickUpdate}
    />
  )
}