import styled from "@emotion/styled"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 240px;
  width: 764px;
`
const SlickDiv = styled(Slider)`
  height: 192px;
  width: 764px;
`

const ImgDiv = styled.div`
  width: 764px;
  height: 240px;
  overflow: hidden;
`

const Img = styled.img`
  width: 764px;
  height: 240px;
  position: relative;
`

export default function LayoutNavigator () {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px'
  }
  const imgSrc = ["/bg.png", "/bg.png", "/bg.png"]

  return (<Wrapper>
      <div>
        <SlickDiv {...settings}>
          {imgSrc.map((el, i) => (
            <ImgDiv key={i}>
              <Img src={el} />
            </ImgDiv>
          ))}
        </SlickDiv>
      </div>
  </Wrapper>)
}