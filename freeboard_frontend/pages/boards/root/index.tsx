import styled from "@emotion/styled"

export default function RootPage () {
  const Wrapper = styled.div`
    width: 900px;
    height: 800px;
    border: 2px solid #7d5c2a;
  `

  const Top = styled.div`
    height: 90px;
    width: 100%;
    border-bottom: 2px solid #7d5c2a;
  `
  const Logo = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    border-bottom: 2px solid #7d5c2a;
  `
  const LogoLeft = styled.div`
    width: 250px;
    height: 100%;
    border-right: 1px solid #7d5c2a;
  `
  const LogoCenter = styled(LogoLeft)`
    width: 400px;
  `
  const LogoRight = styled.div`
    width: 250px;
  `

  return (
    <Wrapper>
      <Top>
      </Top>
      
      <Logo>
        <LogoLeft></LogoLeft>
        <LogoCenter></LogoCenter>
        <LogoRight></LogoRight>
      </Logo>
    </Wrapper>


  )
}