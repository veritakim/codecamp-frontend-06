import styled from "@emotion/styled"
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 200px;
  background-color: #f2c2d4;
  display: flex;
  justify-content: center; 
`

const SliderDiv = styled(Slider)`
  width: 800px;
  display: flex;
  justify-content: center;

`

const Img = styled.img`
  width: 250px;
  margin-left: 262px;
`

export default function Layoutbanner () {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return <Wrapper>
     <SliderDiv {...settings}>
      <div>
        <div>
          <Img src="https://images.mypetlife.co.kr/content/uploads/2021/10/22152410/IMG_2087-scaled-e1634883900174-1024x739.jpg" />
          </div>
      </div>
      <div>
          <Img src="https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_280/5-3-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg" />
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </SliderDiv>
  </Wrapper>;
}