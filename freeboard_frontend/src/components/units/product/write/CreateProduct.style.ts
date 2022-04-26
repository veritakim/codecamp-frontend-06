import { PlusCircleOutlined } from "@ant-design/icons"
import styled from "@emotion/styled"

export const Wrapper = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 80px 102px;
  box-shadow: 0 0 20px 0;
`

export const HeadTitiel = styled.div`
  font-size: 36px;
  font-weight: 700;
`
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`


export const ImgUploadDiv = styled(InputDiv)`
  flex-direction: row;
`

export const HeadDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const LittleTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`

export const Input = styled.input`
  width: 996px;
  height: 52px;
  border: none;
  border: 1px solid #BDBDBD;
`

export const ButtonArea = styled(HeadDiv)`
`

export const PhotoImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 10px;
  overflow: hidden;
`

export const UploadFileHidden = styled.input`
  display: none;
`;

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

export const ImgCount = styled.img``

export const MapArea = styled(InputDiv)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

