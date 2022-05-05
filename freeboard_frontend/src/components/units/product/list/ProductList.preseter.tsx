import styled from "@emotion/styled"
import {v4 as uuid} from 'uuid'

const Container = styled.div`
  width: 380px;
  height: 410px;
  background-color: white;
  border: 1px solid black;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin-right: 60px;
  margin-bottom: 48px;
`

const ProductImg = styled.img`
  width: 248px;
  height: 221px;
`

const ContentsDiv = styled.div`
  width: 250px;
  height: 98px;
  padding: 16px;
`

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`

const Price = styled(Title)`
  margin-bottom: 0px;
`

export default function ProductListUI (props: any) {
  // console.log(props.el.images.filter((e) => e != "")[0])
  const imgUrl = props.el.images.filter((e) => e !== "")[0]
  // console.log(imgUrl)
  return (

      <Container>
        <div key={uuid()} id={props.el._id} onClick={props.onClickMove(props.el)}>
        {imgUrl === undefined 
          ? (
            <ProductImg src="/b-object.jpeg"/>
            ) 
            : (
            <ProductImg src={`https://storage.googleapis.com/${imgUrl}`} />
          )} 
          <ContentsDiv>
            <Title>{props.el.name}</Title>
            <Price>{props.el.price}원</Price>
          </ContentsDiv>
        </div>
        <div>
          {props.todayList ?
          (<div>{props.todayList[props.todayList.length - 1]}</div>)
        : 
        (<div></div>)
        }

        </div>
      </Container>
  )
}