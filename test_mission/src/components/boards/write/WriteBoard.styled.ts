import styled from "@emotion/styled"
import {PlusCircleOutlined} from '@ant-design/icons'

export const Wrapepr = styled.div`
  width: 740px;
  height: 648px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`

export const Head = styled.div`
  width: 100%;
  height: 84px;
  border-bottom: 1px solid #6400FF;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`

export const Title = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

`
export const TitleName = styled.div`
  width: 60px;
  font-size: 14px;
  font-weight: 700;
`
export const TitleInput = styled.input`
  width: 604px;
  height: 40px;
  border: none;
  border: 1px solid #E5E5E5;
  padding: 0 10px 0 10px;
`

export const Contents = styled(Title)`
  height: 240px;
  align-items: baseline;
`
export const ContentTextArea = styled.textarea`
  width: 604px;
  height: 100%;
  border: none;
  border: 1px solid #E5E5E5;
  padding: 10px;
  resize: none;
`

export const ImgArea = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
`
export const ImgName = styled(TitleName)`
  width: 60px;
  height: 20px;
  margin-right: 20px;
  margin-top: 10px;
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
`
export const Plus = styled(PlusCircleOutlined)`
  font-size: 20px;
  color: #999999;
`
export const Bottom = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`

export const WriterInput = styled(TitleInput)`
  width: 242px;
  margin-left: 17px;
`
export const Password = styled.div``
export const PasswordInput = styled(WriterInput)``

export const BottomArea = styled.div`
  display: flex;
  margin-right: 40px;
  align-items: center;
`
export const ButtonArea = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubmitBtn = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 30px;
  margin-right: 30px;
  font-size: 12px;
  font-weight: 700;
`

export const CancelBtn = styled(SubmitBtn)``
