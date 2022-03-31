import styled from "@emotion/styled";
import { MyRegisterBtnProps } from "./BoardWirte.types";

export const MyPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* padding: 101px 360px; */
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  width: 1200px;
  height: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 60px 103px;
`;

export const MyLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
`;
export const MyTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 80px;
`;

export const MyHeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 40px;
`;
export const MyLittleWrapper = styled.div`
  height: 92px;
  width: 100%;
  padding-right: 20px;
`;

export const MySmallTitle = styled.div`
  font-size: 16px;
  padding-bottom: 16px;
`;

export const MySmallInput = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const MyMiddleWrapper = styled.div`
  padding-bottom: 40px;
`;

export const MyMiddleTextArea = styled.div`
  padding-bottom: 16px;
`;

export const MyMiddleInput = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  cursor: default;
  outline: none;
`;

export const MyMiddleText = styled.textarea`
  width: 100%;
  height: 480px;
  border: 1px solid #bdbdbd;
  padding: 16px;
`;

export const MyAddrWrapper = styled.div`
  padding-bottom: 30px;
`;

export const MyAddrCode = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;
`;

export const MyAddrCodeInput = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 16px;
  text-align: center;
  cursor: default;
  outline: none;
`;
export const MyAddrBtn = styled.button`
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;
  border: none;
`;
export const MyAddrInput = styled.input`
  width: 100%;
  border: 1px solid #bdbdbd;
  padding-bottom: 30px;
  padding-left: 16px;
`;

export const MyAddrWrappert = styled.div`
  width: 100%;
  padding-bottom: 37px;
`;

export const MyPhotoBody = styled.div`
  padding-bottom: 40px;
`;

export const MyPhotoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 728px 0px 0px;
`;
export const MyPhotoBtn = styled.div`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

export const MyPhotoSpanPlus = styled.span`
  font-size: 14px;
  color: #4f4f4f;
`;
export const MyPhotoSpanUp = styled.span`
  font-size: 12px;
  color: #4f4f4f;
`;

export const MyMain = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 80px;
`;

export const MyMainDiv = styled.div`
  padding-right: 20px;
`;

export const MyMainRadio = styled.input`
  margin-right: 10px;
  accent-color: darkgoldenrod;
`;
export const MyRegisterBtnDiv = styled.div`
  width: 100%;
  text-align: center;
`;
export const ExtenFont = styled(MyPhotoSpanPlus)``;

export const MyRegisterBtn = styled.button`
  height: 52px;
  width: 179px;
  background-color: ${(props: MyRegisterBtnProps) =>
    props.isActive ? "#FFD600" : "none"};
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const ErrorDiv = styled.div`
  color: red;
`;
