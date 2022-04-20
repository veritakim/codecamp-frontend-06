import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DetailProductUi from "./DetailProduct.preseter";
import { FETCH_USED_ITEM } from "./DetailProduct.query";

export default function DetailProductContainer () {
  const router = useRouter()

  const {data} = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.productId
    }
  })



  return (
    <DetailProductUi 
      data={data}
    />
  )
}