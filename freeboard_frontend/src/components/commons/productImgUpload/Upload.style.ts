import styled from "@emotion/styled";
import {PlusCircleOutlined} from '@ant-design/icons'


export const PhotoImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 10px;
  overflow: hidden;
`

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #FAFAFA;
  border: 1px dotted #E5E5E5;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  overflow: hidden;
`
export const Plus = styled(PlusCircleOutlined)`
  font-size: 20px;
  color: #999999;
`
export const UploadFileHidden = styled.input`
  display: none;
`;