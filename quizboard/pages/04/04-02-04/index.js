import {useState} from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationProduct(){
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const [seller, setSeller] = useState("")
    const [productName, setProductName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

    const onClickSubmit = async () => {
      const result = await createProduct({ 
            variables: { 
                seller: seller,
                createProductInput: {
                    name: productName,
                    detail: detail,
                    price: Number(price)
                }
            } 
        })
        console.log(result.data.createProduct._id)
        console.log(result.data.createProduct.number)
        console.log(result.data.createProduct.message)
    }

    const onChangeSeller = (event) => {
      setSeller(event.target.value)
    }
    const onChangeProductName = (event) => {
      setProductName(event.target.value)
    }
    const onChangeDetail = (event) => {
      setDetail(event.target.value)
    }
    const onChangePrice = (event) => {
      setPrice((event.target.value))
    }

    return (
        <>
            판매자: <input type="text" onChange={onChangeSeller}/><br />
            상품명: <input type="text" onChange={onChangeProductName}/><br />
            상품내용: <input type="text" onChange={onChangeDetail} /><br />
            상품가격: <input type="text" onChange={onChangePrice} /><br />
            
            <button onClick={onClickSubmit}>상품 등록하기</button>
        </>
    )

}