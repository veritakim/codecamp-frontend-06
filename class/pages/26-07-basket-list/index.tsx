import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

const MyRow = styled.div`
  display: flex;
  flex-direction: row;

`
const MyColumn = styled.div`
  width: 25%;
`

export default function BasketListPage () {
  const [basketItems, setBasketItems] = useState([""])

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets")|| "[]")
    setBasketItems(baskets)
  }, [])
  
  return (
   
    <div>
      {basketItems.map( (el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  )
}

