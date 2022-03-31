import Layoutbanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import LayoutFooter from "./footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  width: 1200px;
  height: 100%;
`
const BodyWrapper = styled.div`
  display: flex;
  height: 100%;
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
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  )
}

