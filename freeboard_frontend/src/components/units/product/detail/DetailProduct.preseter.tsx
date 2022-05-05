import styled from "@emotion/styled"
import Dompurify from 'dompurify'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import KakaoMapPage2 from "../../../commons/map2";
import QuestionWritePage from "../question/write/QuestionWrite";
import QuestionListPage from "../question/list/QuestionList";
import {v4 as uuid} from 'uuid'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

const DetailContainer = styled.div`
  width: 800px;
  height: 900px;
  background-color: #E1E0DD;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  margin-right: 20px;
`

const TopWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
`

const CommentWrapper = styled(DetailContainer)`
  width: 500px;
  background-color: white;
  border: 1px solid black;
`

const Basket = styled(ShoppingBasketIcon)`
  cursor: pointer;
  color: #BEBEBE;
`
interface IProps {
  isClicked: boolean
}

const Heart = styled.div`
  width: 84px;
  height: 100px;
  /* position: absolute; */
  /* left: 50%; */
  /* top: 50%; */
  position: relative;
  top: 53px;
  right: -55px;
  transform: translate(-50%, -50%);
  background: url(https://cssanimation.rocks/images/posts/steps/heart.png) no-repeat;
  background-position: 0 0;
  cursor: pointer;
  animation: ${(props: IProps) => (props.isClicked && "fave-heart 1s steps(28)")};

  background-position: ${(props: IProps) => (props.isClicked && "-2800px 0")};
  transition: ${(props: IProps) => (props.isClicked && "background 1s steps(28)")};
  
  
@keyframes fave-heart {
  0% {
    background-position: ${(props: IProps) => (props.isClicked && "0 0")};
  }
  100% {
    background-position: ${(props: IProps) => (props.isClicked && "-2800px 0")};
  }
}

`

const Img = styled.img`
  width: 320px;
  height: 320px;
`

const ImgArea = styled.div``

const ContentsArea = styled.div``

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 490px;
  justify-content: space-evenly;
  align-items: center;
`

const HeartArea = styled.div`
  width: 150px;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const UpdateBtn = styled.button`
  width: 180px;
  height: 70px;
  font-size: 20px;
  font-weight: 700;
  border: none;
  background-color: #FFE004;
`

const DeleteBtn = styled(UpdateBtn)`
  background-color: black;
  color: white;
  margin-right: 20px;
`

const HashArea = styled.div`
  display: flex;
  height: 100px;
`

const TagDiv = styled.div`
  width: 100px;
  height: 30.51px;
  background-color: #FFE004;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 32.49px;
`

export default function DetailProductUi (props: any) {
  // console.log(props.data?.fetchUseditem?._id)
  props.data?.fetchUseditem.images.map(el => {
    if (el !== "") {
      console.log(el)
    }
  })

  const imgUrl = props.data?.fetchUseditem.images.filter((e:string) => e != "")[0]
  return (
    <Wrapper>
      <DetailContainer>
        
        <TopWrapper>
          <ImgArea>
            {imgUrl ? (
              <Img src={`https://storage.googleapis.com/${imgUrl}`}/>
              )
              : <Img src="/nonPicture.png" />
            }
          </ImgArea>

          <ContentsArea>
            <div>상품명 : {props.data?.fetchUseditem.name}</div>
            <div>한줄설명 : {props.data?.fetchUseditem.remarks}</div>
            <div>가 격 : {props.data?.fetchUseditem.price}원</div>
            <HashArea>
              {props.data?.fetchUseditem.tags.filter((el:string) => (el !== ""))
              .map((el:string) => (
                <TagDiv key={uuid()}>{el}</TagDiv>
                ))}
            </HashArea>
            {typeof window !== "undefined" 
            ? (
            <div dangerouslySetInnerHTML={{__html: Dompurify.sanitize(props.data?.fetchUseditem.contents)}}></div>
            )
            :
            <div></div>
            }
            <div>{props.data?.fetchUseditem.price}</div>
            <ButtonArea>
              <Basket onClick={props.onClickBaket(props.data?.fetchUseditem)} />
              <button onClick={props.onClickBuyItem(props.data?.fetchUseditem._id)}>구매하기</button>
              <HeartArea>
                <Heart onClick={props.onClickHeart(props.data?.fetchUseditem._id)} isClicked={props.clicked}></Heart>
                <div>찜하기</div>
                <div>{props.data?.fetchUseditem.pickedCount || 0}</div>
              </HeartArea>
            </ButtonArea>
            {props.userInfo.email === props.data?.fetchUseditem.seller.email 
            ? (
              <>
                <UpdateBtn onClick={props.onClickUpdate}>수정하기</UpdateBtn>
                <DeleteBtn onClick={props.onClickDelete(props.data?.fetchUseditem._id)}>삭제하기</DeleteBtn>
              </>
              ) 
            : (<div></div>)
          }
          </ContentsArea>

        </TopWrapper>


          {props.data?.fetchUseditem?.useditemAddress?.lng && (
            <KakaoMapPage2 
              lng={props.data?.fetchUseditem.useditemAddress.lng}
              lat={props.data?.fetchUseditem.useditemAddress.lat}
            />
          )}
          {!props.data?.fetchUseditem?.useditemAddress?.lng && (
              <img style={{width: "860px", height: "448px"}} src='/nonMap.webp' />
          )}
        
      </DetailContainer>

      <CommentWrapper>
        <QuestionWritePage id={props.data?.fetchUseditem._id}/>
        <QuestionListPage id={props.data?.fetchUseditem._id} />
      </CommentWrapper>
    </Wrapper>
  )
}