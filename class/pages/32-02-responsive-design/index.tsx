import styled from "@emotion/styled"

const Wrapper = styled.div`
  width: 62.5rem; // 1000px;
  height: 62.5rem; // 1000px;
  background-color: orange;

  // 태블릿
  @media (min-width: 768px) and (max-width: 991px) {
    width: 500px;
    height: 500px;
    background-color: green;
  }
  // 모바일
  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: yellow;
    display: none;
  }
`


export default function ResponseDesignPage () {


  return (

    <Wrapper>상자</Wrapper>
  )
}