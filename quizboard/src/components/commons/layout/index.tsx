import Layoutbanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import LayoutFooter from "./footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  
`
const BodyWrapper = styled.div`
  display: flex;
`

const LayoutSidebar = styled.div`
  height: 300px;
  width: 300px;
  background-color: skyblue;
`


interface ILayoutProps {
  children: ReactNode;
}

export default function Layout (props: ILayoutProps) {



  return (
    <>
      <LayoutHeader />
      <Layoutbanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar>사이드바영역</LayoutSidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  )
}

