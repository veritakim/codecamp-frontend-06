import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";


const MySpan = styled.span`
  margin-left: 10px;
`


export default function Pagination (props: any) {
  const [startPage, setStartPage] = useState(1);
  
  const onClickPrevPage = () => {
    if(startPage !== 1) {
      setStartPage((prev) => prev - 10)
      props.refetch({ page: startPage - 10})
    }
  }

  const onClickNextPage = () => {
    if (startPage + 10 <= props.lastPage) {
      setStartPage((prev) => prev + 10)
      props.refetch({ page: startPage + 10})
    }
  }

  const onClickPage = (event) => {
    props.refetch({ page:  Number(event.target.id)})
  }

  return (
    <div>
      <span onClick={onClickPrevPage}>prev◀︎</span>
      {      
        new Array(10).fill(1).map((_, index) => index + startPage <= props.lastPage ? (
            <MySpan onClick={onClickPage} key={index + startPage} id={String(index + startPage)}>{index + startPage}</MySpan>
        ) : (
          <span></span>
        ))
      }
      <span onClick={onClickNextPage}>►next</span>
    </div>
  )
}