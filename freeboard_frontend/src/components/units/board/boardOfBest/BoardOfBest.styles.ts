import { LikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const ContainerBox = styled.div`
  width: 282px;
  height: 257px;
  border-radius: 25px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
    &:hover {
      box-shadow: inset 5px 5px 10px 5px rgb(0, 0, 0, 0.1);
    }
`;

export const ImageArea = styled.img`
  width: 100%;
  height: 120px;
  border-top-left-radius:  25px;
  border-top-right-radius:  25px;
`

export const Body = styled.div`
  padding: 20px;
`

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 22px 0 8px 0;
`
export const Writer = styled.div`
  display: flex;
`
export const WriterAvater = styled.div`
  margin-right: 6px;
`
export const WriterName = styled.div``

export const ThumbsImg = styled(LikeOutlined)`
  font-size: 20px;
  color: #FFD600;
`
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const DateArea = styled.div`
  color: #828282;
  font-size: 12px;
`
export const ThumbsNumber = styled.div`
  font-size: 16px;
`