import { useQuery } from "@apollo/client";
import ProductListUi from "./ProductList.preseter";
import { FETCH_USED_ITEMS } from "./ProductList.query";
import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import {v4 as uuid} from 'uuid'
import { useEffect, useState, MouseEvent } from "react";

const InfiniteWrapper = styled.div``

export default function ProductListContainer () {
  // const [todayList, setTodayList] = useState([""])

  const newDate = new Date();
  const yyyy = newDate.getFullYear()
  const mm = newDate.getMonth() + 1
  const dd = newDate.getDate()

  const today = `${yyyy}-${mm}-${dd}`

  // useEffect(() => {
  //   const baskets = JSON.parse(localStorage.getItem(today)|| "[]")
  //   // setTodayList(baskets)
  // }, [])

  const {data, fetchMore } = useQuery(FETCH_USED_ITEMS)
  const router = useRouter()

  const onLoadMore = () => {
    if (!data) return

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems) return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems
          ]
        }
      }
    })
  }

  const onClickMove = (value) => (event) => {
    const baskets = JSON.parse(localStorage.getItem(today) || "[]") 
    
    const temp = baskets.filter((item) => (item._id === event.currentTarget.value))
    if( temp.length === 1) {
      return
    }
    
    const { __typename, ...newEl } = value
    baskets.push(newEl)
    localStorage.setItem(today, JSON.stringify(baskets))
    
    // console.log(value._id)
    router.push(`/product/${value._id}`)
  }

  

  return (
    <InfiniteWrapper style={{height: "446px", overflow: "auto"}}>
      <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
      >
      {data?.fetchUseditems.map((el: any, index) => (
        <>
        <ProductListUi 
          key={uuid()}
          el={el}
          onClickMove={onClickMove}
          onLoadMore={onLoadMore}
          index={index}
        />
        {(index + 1) % 3 === 0 && <br />}
        </>
      ))}

      </InfiniteScroll>
    </InfiniteWrapper>
  )
}