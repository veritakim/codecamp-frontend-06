import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleUser, faShareSquare, faThumbsUp, faThumbsDown} from "@fortawesome/free-regular-svg-icons";
import {faMapMarkerAlt, faBookmark} from '@fortawesome/free-solid-svg-icons'
import { Container,
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
  BtnStyle
 } from "./DetailBoard.style";


export default function DetailBoardUi (props) {
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
            <DetailImg src='https://i.pinimg.com/736x/ba/c9/23/bac923a682afa0b2ec4257ca5f31abb4.jpg'></DetailImg>
            {/* <DetailImg src={data?.fetchBoard.images} alt="이미지"></DetailImg> */}
          </DetailPictureBox>
          <DetailContent>{props.data?.fetchBoard.contents}</DetailContent>
          <DetailVideo>
              <VideoArea src={props.data? props.data?.fetchBoard.youtubeUrl : ""}></VideoArea>
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
        <BtnStyle onClick={props.onClickEdit} id={props.data?.fetchBoard._id}>수정하기</BtnStyle>
        <BtnStyle onClick={props.onClickDelete} id={props.data?.fetchBoard._id}>삭제하기</BtnStyle>
      </ButtonArea>

    </WrapperBox>
  )
}