import Layoutbanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import LayoutFooter from "./footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  height: 100%;
  margin: 0 auto;
`
const BodyWrapper = styled.div`
  display: flex;
`


// const HIDDEN_HEADERS = [
//   "/12-05-modal-refactoring",
//   "/12-03-modal-address"
// ]

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout (props: ILayoutProps) {

  const router = useRouter();
  // const isHidden = HIDDEN_HEADERS.includes(router.asPath)
  // isHidden false면 보여주고 true면 보여줘라 


  return (
    <>
      <LayoutHeader />
      <Layoutbanner />
      <BodyWrapper>
        {/* <LayoutSidebar>여기는 사이드바</LayoutSidebar> */}
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  )
}

