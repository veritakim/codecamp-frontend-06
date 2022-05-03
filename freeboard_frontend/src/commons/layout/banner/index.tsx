import styled from "@emotion/styled"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { myTodayBasket } from "../../store";
import { Modal } from "antd";
import { ConsoleSqlOutlined } from "@ant-design/icons";
import {v4 as uuid} from 'uuid'
import { useRouter } from "next/router";


const Wrapper = styled.div`
  width: 1200px;
  height: 400px;
  display: flex;
  justify-content: center;
  
`

const SlickDiv = styled(Slider)`
  height: 300px;
  width: 2800px;
`

const ImgDiv = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`

const Img = styled.img`
  width: 100%;
  position: relative;
`

const RecentItem = styled.div`
  position: fixed;
  width: 155px;
  height: 175px;
  right: 90px;
  top: 503px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 10px 0;
`

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 22px;
`

const ItemDiv = styled.div`
  width: 85px;
  height: 85px;
  background-color: #C4C4C4;
  margin-bottom: 10px;
`

const ItemImg = styled.img`
  width: 85px;
  height: 85px;
  margin-bottom: 10px;
  overflow: hidden;
`

const ModalArea = styled(Modal)`
  width: 464px;
  height: 316px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 50px;
`

const ModalDiv = styled.div`
  width: 550px;
  height: 450px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px 0 25px;
`

const ModalContentsDiv = styled.div`
  width: 30%;
  height: 170px;
  border: 1px solid black;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ModalImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 10px 10px 5px;
  
  overflow: hidden;

`

const ModalName = styled.div`
  width: 80px;
  height: 20px;
  overflow: hidden;
  font-weight: 700;
  text-align: center;
`


export default function Layoutbanner () {
  const newDate = new Date();
  const yyyy = newDate.getFullYear()
  const mm = newDate.getMonth() + 1
  const dd = newDate.getDate()

  const today = `${yyyy}-${mm}-${dd}`
  const today2 = `${yyyy}.${mm}.${dd}`

  const [todayBasketState, setTodayBasketState] = useRecoilState(myTodayBasket)
  const [recentItem, setRecentItem] = useState([""])

  const [isOpen, setIsOpen] = useState(false)

  // console.log("dd", recentItem)
  useEffect(() => {
    const lattestItems = JSON.parse(localStorage.getItem(today) || "[]")
    setRecentItem(lattestItems)
  }, [todayBasketState])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: '0px'
  }

  const imgSrc = ["/slickImg/nightSky.jpeg", "/slickImg/rocket.png", "/slickImg/whale.jpeg"]
  const router = useRouter()

  const setToggle = () => {
    setIsOpen(prev => !prev)
    // alert("di")
  }

  const onClickMove = (el) => () => {
    setIsOpen(prev => !prev)
    router.push(`/product/${el}`)
  }


  return (
  <Wrapper>
    <div>
        <SlickDiv {...settings}>
          {imgSrc.map((el, i) => (
            <ImgDiv key={i}>
              <Img src={el} />
            </ImgDiv>
          ))}
        </SlickDiv>
      </div>

      <RecentItem>
          <Title>최근 본 상품</Title>
          {recentItem[recentItem.length-1] ? <ItemImg onClick={setToggle} src={`https://storage.googleapis.com/${recentItem[recentItem.length-1].images[0]}`} /> : <ItemDiv onClick={setToggle}></ItemDiv>}
      </RecentItem>
      {isOpen && (
        <ModalArea
        title={`${today2} 본 상품`}
        visible={true}
        onCancel={setToggle}
        width={700}
        >
          <ModalDiv>

          {recentItem.length <= 0
            ? (<ModalImg src='/nonPicture.png'/>)
            : (
              recentItem.map((el) => (
                <ModalContentsDiv key={uuid()} onClick={onClickMove(el._id)}>
                  <ModalImg  src={`https://storage.googleapis.com/${el.images[0]}`} />
                  <ModalName><p>{el.name}</p></ModalName>
                </ModalContentsDiv>
              ))
              )
            }
          </ModalDiv>
        </ModalArea>

        )
      }

  </Wrapper>);
}