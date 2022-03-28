import styled from "@emotion/styled";

export const WrapperBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Container = styled.div`
  width: 1200px;
  height: 100%;
  flex-direction: colomn;
  padding: 80px 102px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const DetailHead = styled.div`
  width: 996px; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #BDBDBD;
  padding-bottom: 20px;
}
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserCircle = styled.div`
  font-size: 46.67px;
  padding-right: 16.67px;
`;

export const UserNameBox = styled.div``;

export const UserName = styled.div`
  font-size: 24px;
`;
export const UserDate = styled.div`
  font-size: 16px;
  color: #828282;
`;

export const UserIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const UserIconStyle = styled.div`
  font-size: 26.67px;
  padding-left: 35.33px;
  color: #ffd600;
`;

export const DetailContents = styled.div`
  width: 100%;
  padding-top: 80px;
`;

export const DetailTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  padding-bottom: 40px;
`;

export const DetailPictureBox = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px 0px 40px 0px;
`;

export const DetailImg = styled.img``;

export const DetailContent = styled.div`
  width: 100%;
  font-size: 16px;
  padding-bottom: 120px;
`;

export const DetailVideo = styled.div`
  text-align: center;
  padding-bottom: 162px;
`;

export const DetailReactionBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const ThumbsUp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 59px 4px 0px;
  color: #ffd600;
`;

export const ThumsDown = styled(ThumbsUp)`
  color: #828282;
  padding-right: 0px;
`;

export const LikeCount = styled.span``;
export const DisLikeCount = styled.span``;

export const VideoArea = styled.iframe``;
export const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  padding: 87px 0px 87px 24px;
`;

export const BtnStyle = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  margin-right: 24px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  &:hover {
    background-color: #ffd600;
  }
`;

export const CommentArea = styled.div`
  border-top: 1px solid #bdbdbd;
  width: 1200px;
  height: 100%;
`;

export const CommentWriterArea = styled.div`
  padding-top: 40px;
`;
export const CommentText = styled.div`
  font-size: 18px;
  padding-bottom: 40px;
`;
export const CommentWriterInput = styled.div`
  padding-bottom: 20px;
`;

export const CommentWriter = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 24px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
`;

export const CommentContentsArea = styled.div`
  width: 1200px;
  border: 1px solid #bdbdbd;
`;

export const CommentContents = styled.textarea`
  width: 100%;
  height: 108px;
  resize: none;
  padding: 20px;
  border: none;
  font-size: 16px;
`;

export const CommentContentsBtnArea = styled.div`
  height: 52px;
  border-top: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-item: center;
`;

export const TextCount = styled.div`
  font-size: 16px;
  color: #bdbdbd;
`;

export const CommentRegisterBtn = styled.button`
  width: 91px;
  height: 100%;
  background-color: black;
  color: white;
  cursor: pointer;
`;
