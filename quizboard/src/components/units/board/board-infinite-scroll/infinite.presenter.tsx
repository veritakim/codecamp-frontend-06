import InfiniteScroll from 'react-infinite-scroller';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  height:500px;overflow:auto;

`

const MyDiv = styled.div`
    display: flex;
`
const TitleDiv = styled.div`
  width: 200px;
  margin-right: 50px;
`


export default function InfiniteUi (props) {
  console.log(props.data)
  

  return (
    <Wrapper>
    <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={false}
    >
        {props.data?.fetchBoards.map( (el) => (
          <MyDiv key={el._id}>  
            <TitleDiv>{el.title}</TitleDiv>
            <div>{el.writer}</div>
          </MyDiv>
        )

        )}
    </InfiniteScroll>
</Wrapper>
  )

}