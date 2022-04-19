import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";


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
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  height: 100%;
`

const List = styled.div`
  width: 600px;
`
const TodayList = styled.div`
  width: 600px;

`

export default function TodayPage () {
  const {data} = useQuery(FETCH_BOARDS) 
  const [todayList, setTodayList] = useState([""])

  const newDate = new Date();
  const yyyy = newDate.getFullYear()
  const mm = newDate.getMonth() + 1
  const dd = newDate.getDate()

  const today = `${yyyy}-${mm}-${dd}`

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem(today)|| "[]")
    setTodayList(baskets)
  }, [])

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem(today) || "[]") 

    const temp = baskets.filter((item: IBoard) => (item._id === el._id))
    if( temp.length === 1) {
      return
    }

    const { __typename, ...newEl } = el
    baskets.push(newEl)
    localStorage.setItem(today, JSON.stringify(baskets))

    // 데이터 꺼내오기

    const newList = JSON.parse(localStorage.getItem(today)|| "[]")
    setTodayList(newList)
  }


  return (
  <Wrapper>
    <List>
    {data?.fetchBoards.map( (el: IBoard) => (
        <MyRow key={el._id} onClick={onClickBasket(el)}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}

    </List>
    <TodayList>
      <div>오늘 본 상품</div>
      {todayList.map((el) => (
        <MyRow key={el._id}>
        <MyColumn>{el.writer}</MyColumn>
        <MyColumn>{el.title}</MyColumn>
      </MyRow>
      ))}

    </TodayList>
  </Wrapper>)
}