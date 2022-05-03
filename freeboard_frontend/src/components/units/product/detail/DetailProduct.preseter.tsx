import styled from "@emotion/styled"
import Dompurify from 'dompurify'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import KakaoMapPage2 from "../../../commons/map2";
import QuestionWritePage from "../question/write/QuestionWrite";
import QuestionListPage from "../question/list/QuestionList";

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
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
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
        
        <div>
        {imgUrl ? (
          <Img src={`https://storage.googleapis.com/${imgUrl}`}/>
        )
        : <Img src="/nonPicture.png" />
        }
          <div>{props.data?.fetchUseditem.name}</div>
          <div>{props.data?.fetchUseditem.remarks}</div>
          {typeof window !== "undefined" 
          ? (
          <div dangerouslySetInnerHTML={{__html: Dompurify.sanitize(props.data?.fetchUseditem.contents)}}></div>
          )
          :
          <div></div>
          }
          <Basket onClick={props.onClickBaket(props.data?.fetchUseditem)} />
          <div>{props.data?.fetchUseditem.price}</div>
          <button onClick={props.onClickBuyItem(props.data?.fetchUseditem._id)}>구매하기</button>
          {props.userInfo.email === props.data?.fetchUseditem.seller.email 
          ? (<button onClick={props.onClickUpdate}>수정하기</button>) 
          : (<div></div>)
        }


          {props.data?.fetchUseditem?.useditemAddress?.lng && (
            <KakaoMapPage2 
              lng={props.data?.fetchUseditem.useditemAddress.lng}
              lat={props.data?.fetchUseditem.useditemAddress.lat}
            />
          )}
          {!props.data?.fetchUseditem?.useditemAddress?.lng && (
              <img style={{width: "860px", height: "448px"}} src='/nonMap.webp' />
          )}
        </div>

        <div>
          <Heart onClick={props.onClickHeart(props.data?.fetchUseditem._id)} isClicked={props.clicked}></Heart>
          <div>찜하기</div>
        </div>
      </DetailContainer>

      <CommentWrapper>
        <QuestionWritePage id={props.data?.fetchUseditem._id}/>
        <QuestionListPage id={props.data?.fetchUseditem._id} />
      </CommentWrapper>
    </Wrapper>
  )
}