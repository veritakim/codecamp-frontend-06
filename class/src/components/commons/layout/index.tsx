import Layoutbanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import LayoutFooter from "./footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  height: 500px;
  width: 100%;
`
const BodyWrapper = styled.div`
  display: flex;
  width: 1200px;
`


const HIDDEN_HEADERS = [
  "/12-05-modal-refactoring",
  "/12-03-modal-address"
]

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout (props: ILayoutProps) {

  const router = useRouter();
  const isHidden = HIDDEN_HEADERS.includes(router.asPath)
  // isHidden false면 보여주고 true면 보여줘라 


  return (
    <>
      {!isHidden &&     <LayoutHeader />}
      <Layoutbanner />
      <LayoutNavigation />
      <BodyWrapper>
        {/* <LayoutSidebar>여기는 사이드바</LayoutSidebar> */}
        <Body>{props.children}</Body>
      </BodyWrapper>
      {/* <LayoutFooter /> */}
    </>
  )
}

