import {useRouter} from 'next/router'
import {useQuery, gql} from '@apollo/client'


const FETCH_PRODUCT = gql`
query fetchProduct($productId: ID){
  fetchProduct(productId: $productId) {
    _id
    seller
    name
    detail
    price
  }
}
`


export default function DetailProduct () {

  const router = useRouter()
  console.log(router);

  const {data} = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: (router.query.id)
    }
  })

  console.log('data', data);
  

  return (
    <div>
      <div>{data?.fetchProduct.seller}의 글입니다</div>

      <div>작성자 : {data ? data?.fetchProduct.seller : <span>Loading</span>}</div>
      <div>제목 : {data ? data?.fetchProduct.name : <span>Loading</span>}</div>
      <div>내용 : {data ? data?.fetchProduct.detail : <span>Loading</span>}</div>
      <div>가격 : {data ? data?.fetchProduct.price : <span>Loading</span>}</div>

    </div>
  )
}