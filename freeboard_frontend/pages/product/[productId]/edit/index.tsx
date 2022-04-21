import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM } from "../../../../src/components/units/product/detail/DetailProduct.query";
import CreateProductContainer from "../../../../src/components/units/product/write/CreateProduct.container";

export default function EditPage () {
  const router = useRouter() 

  const {data} = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.productId
    }
  })

  return <CreateProductContainer isEdit={true} data={data}/>
}