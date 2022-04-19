import {useQuery, gql} from '@apollo/client'
import styled from '@emotion/styled'
import { IBoard } from '../../src/commons/types/generated/types'


const FETCH_BOARDS = gql `
  query fetchBoards{
        fetchBoards{
          _id
          writer
          title
        }
}
`
const MyRow = styled.div`
  display: flex;
  flex-direction: row;

`
const MyColumn = styled.div`
  width: 25%;
`

export default function BasketPage () {
  const {data} = useQuery(FETCH_BOARDS)

  const onClickBasket = (el: IBoard) => () => {
    // console.log("el", el)

    // 이전의 장바구니
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]") 
    // 중복 처리
    const temp = baskets.filter((item: IBoard) => (item._id === el._id))
    // 이미 있다는 뜻
    if( temp.length === 1) {
      alert("이미 담은 물품입니다")
      // 아래로 내려가지 않고 함수가 종료된다.
      return
    }

    // 빼기
    // const newBasket = baskets.filter((item: IBoard) => (item._id !== el._id))

    const { __typename, ...newEl } = el
    baskets.push(newEl)
    localStorage.setItem("baskets", JSON.stringify(baskets))
  }

  return (
   
    <div>
      {data?.fetchBoards.map( (el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn><button onClick={onClickBasket(el)}>장바구니 담기</button></MyColumn>
        </MyRow>
      ))}
    </div>
    
  )
}

