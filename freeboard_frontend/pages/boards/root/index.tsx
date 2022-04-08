import styled from "@emotion/styled"

export default function RootPage () {
  const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: url("/background.jpg");
    position: fixed;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    `
  const BorderBox = styled.div`
    width: 60%;
    height: 70%;
    border: 3px solid #6f6046;
    position: absolute;
    right: 300px;
    top: 180px;
    z-index: 10;
    box-shadow : 2px 3px 5px 0px gray;
  `

  const ImgRibbon = styled.img`
    width: 50%;
    height: 50%;
    position: absolute;
    right: -100px;
    bottom: 12px;
    transform: rotate(330deg);
    z-index: 10;
  `

  const FlowerImg = styled.img`
    /* width: 10%; */
    height: 50%;
    position: absolute;
    left: 403px;
    bottom: 0px;
    z-index: 10;
  `
  const Button = styled.button`
    width: 300px;
    height: 180px;
    border-radius: 50%;
    background: none;
    font-size: 50px;
    color: #f9f4ed;
    text-shadow: 2px 2px 2px #8f7d5f;
    border: 2px solid #f5ebd9;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  `

  return (
    <Wrapper>
      <BorderBox>
      </BorderBox>
      <ImgRibbon src="/ribbon.png"/>
      <FlowerImg src="/dried.png"/>
      <Button>Enter</Button>
    </Wrapper>


  )
}