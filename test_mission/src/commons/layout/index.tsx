import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutNavigator from "./navigator";
import LayoutSide from "./side";

interface ILayoutProps {
  children: ReactNode;
}

const Body = styled.div`
  height: 500px;
  width: 764px;
  `
const BodyWrapper = styled.div`
  display: flex;
  width: 1200px;
  height: 800px;
  padding: 30px;
  margin: 0 auto;
  background-color: #e5e5e5;
  justify-content: center;
`

const Bind = styled.div`
  margin-left: 20px;
`

export default function Layout (props: ILayoutProps) {
  const router = useRouter()
  const SHOW_NAVI = [
    "/boards",
    `/boards/${router.query.boardId}`
  ]
  const isHidden = SHOW_NAVI.includes(router.asPath)
  return(
    <>
      <BodyWrapper>
        <LayoutSide />
        <Bind>
          {isHidden && <LayoutNavigator />}
          <Body>{props.children}</Body>
        </Bind>
      </BodyWrapper>
    </>
  )
}