import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faShareSquare,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  DetailHead,
  UserInfo,
  UserCircle,
  UserNameBox,
  UserName,
  UserDate,
  UserIcon,
  UserIconStyle,
  DetailContents,
  DetailTitle,
  DetailPictureBox,
  DetailContent,
  DetailVideo,
  DetailReactionBox,
  ThumbsUp,
  ThumsDown,
  LikeCount,
  DisLikeCount,
  WrapperBox,
  ButtonArea,
  BtnStyle,
} from "./DetailBoard.style";
import { DetailBoardUiProps } from "./DetailBoard.types";
import CommentWriteBoard from "../comment/commentWrite/CommentWrite.container";
import CommentListBoard from "../comment/commentList/CommentBoardList.container";
import ReactPlayer from 'react-player';
import { Tooltip } from "antd";

export default function DetailBoardUi(props: DetailBoardUiProps) {
  console.log("주소", props.data)
  return (
    <WrapperBox>
      <Container>
        <DetailHead>
          <UserInfo>
            <UserCircle>
              <FontAwesomeIcon icon={faCircleUser} />
            </UserCircle>
            <UserNameBox>
              <UserName>{props.data?.fetchBoard.writer}</UserName>
              <UserDate> Date : {props.data?.fetchBoard.createdAt}</UserDate>
            </UserNameBox>
          </UserInfo>
          <UserIcon>
            <UserIconStyle>
              <FontAwesomeIcon icon={faShareSquare} />
            </UserIconStyle>
            <UserIconStyle>
              <Tooltip title={props.data?.fetchBoard.boardAddress ? props.data?.fetchBoard.boardAddress.address : ""} color={"rgba(0, 0, 0, 0.5)"}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </Tooltip>
            </UserIconStyle>
          </UserIcon>
        </DetailHead>
        <DetailContents>
          <DetailTitle>{props.data?.fetchBoard.title}</DetailTitle>
          <DetailPictureBox>
            {/* <DetailImg {props.data?.fetchBoard.images ?"" : ""}></DetailImg> */}
          </DetailPictureBox>
          <DetailContent>{props.data?.fetchBoard.contents}</DetailContent>
          <DetailVideo>
            {/* <VideoArea src={props.data?.fetchBoard.youtubeUrl}></VideoArea> */}
            {props.data?.fetchBoard.youtubeUrl? 
              <ReactPlayer url={props.data?.fetchBoard.youtubeUrl} 
              width={486} height={240} playing controls muted></ReactPlayer> : ""
            }
            
          </DetailVideo>
          <DetailReactionBox>
            <ThumbsUp onClick={props.onClickLike}>
              <FontAwesomeIcon icon={faThumbsUp} />
              <LikeCount>{!props.likeCount ? props.data?.fetchBoard.likeCount : props.likeCount}</LikeCount>
            </ThumbsUp>
            <ThumsDown onClick={props.onClickDisLike}>
              <FontAwesomeIcon icon={faThumbsDown} />
              <DisLikeCount>{!props.disLikeCount? props.data?.fetchBoard.dislikeCount : props.disLikeCount}</DisLikeCount>
            </ThumsDown>
          </DetailReactionBox>
        </DetailContents>
      </Container>
      <ButtonArea>
        <BtnStyle onClick={props.onClickBoardsList}>목록으로</BtnStyle>
        <BtnStyle onClick={props.onClickEdit}>수정하기</BtnStyle>
        <BtnStyle onClick={props.onClickDelete} id={props.data?.fetchBoard._id}>
          삭제하기
        </BtnStyle>
      </ButtonArea>
   
      <CommentWriteBoard />
      <CommentListBoard />
    </WrapperBox>
  );
}
