import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faShareSquare,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faBookmark } from "@fortawesome/free-solid-svg-icons";
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
  DetailImg,
  DetailVideo,
  DetailReactionBox,
  ThumbsUp,
  ThumsDown,
  LikeCount,
  DisLikeCount,
  VideoArea,
  WrapperBox,
  ButtonArea,
  BtnStyle,
  CommentArea,
  CommentWriterArea,
  CommentText,
  CommentWriterInput,
  CommentWriter,
  CommentContents,
  CommentContentsArea,
  CommentContentsBtnArea,
  CommentRegisterBtn,
  TextCount,
} from "./DetailBoard.style";
import { DetailBoardUiProps } from "./DetailBoard.types";
import { cp } from "fs";
import { FragmentsOnCompositeTypesRule } from "graphql";

export default function DetailBoardUi(props: DetailBoardUiProps) {
  console.log(props);
  return (
    <WrapperBox>
      <Container>
        <DetailHead>
          <UserInfo>
            {/* <UserCircle css={css`
              font-size: 46px;`}> */}
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
              <FontAwesomeIcon icon={faMapMarkerAlt} />
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
          </DetailVideo>
          <DetailReactionBox>
            <ThumbsUp>
              <FontAwesomeIcon icon={faThumbsUp} />
              <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
            </ThumbsUp>
            <ThumsDown>
              <FontAwesomeIcon icon={faThumbsDown} />
              <DisLikeCount>{props.data?.fetchBoard.dislikeCount}</DisLikeCount>
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
      <CommentArea>
        <CommentWriterArea>
          <CommentText>댓글</CommentText>
          <CommentWriterInput>
            <CommentWriter type="text" placeholder="작성자"></CommentWriter>
            <CommentWriter
              type="password"
              placeholder="비밀번호"
            ></CommentWriter>
          </CommentWriterInput>
          <CommentContentsArea>
            <CommentContents placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></CommentContents>
            <CommentContentsBtnArea>
              <TextCount>0 / 100</TextCount>
              <CommentRegisterBtn>등록하기</CommentRegisterBtn>
            </CommentContentsBtnArea>
          </CommentContentsArea>
        </CommentWriterArea>
        <div>야야야</div>
        <div>야야야</div>
        <div>야야야</div>
        <div>야야야</div>
        <div>야야야</div>
        <div>야야야</div>
      </CommentArea>
    </WrapperBox>
  );
}
