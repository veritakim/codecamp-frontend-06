import styled from '@emotion/styled'
import { useState } from 'react'
import { IBoard } from '../../../../../../commons/types/generated/types'

const MyRow = styled.div`
  display: flex;
  flex-direction: row;

`
const MyColumn = styled.div`
  width: 25%;
`

export default function FetchBoardsItems (props) {
  const [isBasket, setIsBasket] = useState(false)

  const onClickBasket = (el: IBoard) => () => {
    
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]")
    
    const { __typename, ...newEl } = el
    baskets.push(newEl)
    localStorage.setItem("baskets", JSON.stringify(baskets))

    setIsBasket(true)
  }

  const onClickBasketCancel = (el: IBoard) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]")

    const newBasket = baskets.filter((item: IBoard) => (item._id !== el._id))
    localStorage.setItem("baskets", JSON.stringify(newBasket))
    setIsBasket(false)
  }

  
  return (
      <MyRow key={props.el._id}>
            <MyColumn>{props.el.writer}</MyColumn>
            <MyColumn>{props.el.title}</MyColumn>
            {isBasket === false && (
              <button onClick={onClickBasket(props.el)}>게시물 담기</button>
            )}
            {isBasket === true && (
              <button onClick={onClickBasketCancel(props.el)}>담기 취소</button>
            )}
        </MyRow>

  )

}