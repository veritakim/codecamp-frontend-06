import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput){
      _id
      number
      message
    }
  }
`

export default function NewProductPage () {
  
  const router = useRouter()

  const[seller, setSeller] = useState("")
  const[title, setTitle] = useState("")
  const[content, setContent] = useState("")
  const[price, setPrice] = useState("")

  const [createProductApi] = useMutation(CREATE_PRODUCT) 

  const onChangeSeller = (event) => {
    if(event.target.value !== "") {
      setSeller(event.target.value)
    }
  }

  const onChangeTitle = (event) => {
    if(event.target.value !== "") {
      setTitle(event.target.value)
    }
  }
  
  const onChangeContent = (event) => {
    if(event.target.value !== "") {
      setContent(event.target.value)
    }
  }

  const onChangePrice = (event) => {
    if(event.target.value !== "") {
      setPrice(event.target.value)
    }
  }

  const onClickBtn = async () => {
    if(seller !== "" && title !=="" && content !== "" && price !== "") {
      try{
        const result = await createProductApi({
          variables: {
            seller: seller, 
            createProductInput: {
              name: title,
              detail: content, 
              price: Number(price)
            }}
          })
            router.push(`board/${result.data.createProduct._id}`)
            // router.push(`board/83012`)
          // console.log("result", result);


      } catch (error) {
        alert(error.message)
      }

    }



  }
  


  return (
    <div>
      <div>
        판매자 : <input type="text" onChange={onChangeSeller}/>
      </div>
      <div>
        상품명 : <input type="text" onChange={onChangeTitle}/>
      </div>
      <div>
        상품내용 : <input type="text" onChange={onChangeContent} />
      </div>
      <div>
        가격 : <input type="number" onChange={onChangePrice} />
      </div>
      <button onClick={onClickBtn}>제품 등록</button>
    </div>
  )

}