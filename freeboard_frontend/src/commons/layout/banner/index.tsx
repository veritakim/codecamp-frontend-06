import styled from "@emotion/styled"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

export default function Layoutbanner () {
  

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
  </Wrapper>);
}