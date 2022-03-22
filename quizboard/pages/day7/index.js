import {gql, useQuery, useMutation} from '@apollo/client'
import styled from '@emotion/styled'
import {Fragment} from 'react'

const FETCH_PRODUCTS = gql`
  query fetchProducts{
    fetchProducts{ 
      _id
      seller
      name
      detail
      price
    }
  }
`

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID){
    deleteProduct(
      productId: $productId
    ) {
      message
    }
  }
`

const Row = styled.div`
 display: flex;
 flex-direction: row;
`

const Column = styled.div`
  width: 10%;
`


export default function ProductListPage () {
 
  const {data} = useQuery(FETCH_PRODUCTS)
  const [deleteProduct] = useMutation(DELETE_PRODUCT)

  console.log(data);

  function onClickDelete (event) {
    // alert(event.target.id);
    deleteProduct({
      variables: {productId: event.target.id},
      refetchQueries: [{query: FETCH_PRODUCTS}]
    })
  }
  

  return (
    <Fragment>
      {data?.fetchProducts.map((el) => (
        <Row key={el._id}>
          <Column><input type="checkbox" /> </Column>
          <Column>판매자: {el.seller}</Column>
          <Column>물품:  {el.name} </Column>
          <Column>가격: {el.price}</Column>
          <button onClick={onClickDelete} id={el._id}>삭제하기</button>
        </Row>
      ) )}
    </Fragment>
  )
}