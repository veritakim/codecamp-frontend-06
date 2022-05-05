import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import { FETCH_USED_ITEMS } from "./ProductList.query";
import {v4 as uuid} from 'uuid'
import { useRecoilState } from "recoil";
import { myTodayBasket } from "../../../../commons/store";
import ProductListUI from "./ProductList.preseter";


const InfiniteWrapper = styled.div``
const FlexWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1444px;
`
 
export default function ProductList() {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS)
  // console.log(data?.fetchUseditems)
  const [, setTodayState] = useRecoilState(myTodayBasket)

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

  const onClickMove = (value: any) => () => {
    router.push(`/product/${value._id}`)
    const baskets = JSON.parse(localStorage.getItem("lattestProduct") || "[]")

    setTodayState(prev => !prev)

    const temp = baskets.filter((item: any) => (item._id === value._id))
    if (temp.length === 1) {
      return
    } 

    const { __typename, ...newProduct } = value
    baskets.push(newProduct)
    localStorage.setItem("lattestProduct", JSON.stringify(baskets))


    
  }


  return (
    <InfiniteWrapper style={{height: "1000px", overflow: "auto"}} >
      {data && (
        <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={false}
        >
        <FlexWrap>

          {data?.fetchUseditems.map((el: any) => (
            <>
                <ProductListUI
                  key={uuid()}
                  el={el}
                  onLoadMore={onLoadMore}
                  onClickMove={onClickMove}
                  />
              </>
          ))} 
        </FlexWrap>
        </InfiniteScroll>
      )}
        
    </InfiniteWrapper>

  )
}