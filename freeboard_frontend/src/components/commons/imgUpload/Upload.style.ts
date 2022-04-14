import styled from "@emotion/styled";


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

export const MyPhotoImg = styled.img`
  width: 78px;
  height: 78px;
  cursor: pointer;
`

export const MyPhotoSpanPlus = styled.span`
  font-size: 14px;
  color: #4f4f4f;
`;
export const MyPhotoSpanUp = styled.span`
  font-size: 12px;
  color: #4f4f4f;
`;

export const MySmallTitle = styled.div`
  font-size: 16px;
  padding-bottom: 16px;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;