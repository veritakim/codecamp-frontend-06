import {useQuery, gql} from '@apollo/client'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleUser, faShareSquare, faThumbsUp, faThumbsDown} from "@fortawesome/free-regular-svg-icons";
import {faMapMarkerAlt, faBookmark} from '@fortawesome/free-solid-svg-icons'
import {Container,
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
  Bookmark} from '../../../../styles/emotion'



const FETCH_BOARD = gql`
query fetchBoard($boardId: ID!){
  fetchBoard(boardId: $boardId){
    _id
    writer
    title
    contents
    images
    youtubeUrl
    likeCount
    dislikeCount
    
  }
}
  
`


export default function DetailBoardPage () {
  const router = useRouter()
  console.log("router", router)

  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId
    }
  })

  console.log(data)

  

  return (
    <Container>
      <DetailHead>
        <UserInfo>
          {/* <UserCircle css={css`
            font-size: 46px;`}> */}
          <UserCircle>
            <FontAwesomeIcon icon={faCircleUser} />
          </UserCircle>
          <UserNameBox>
            <UserName>{data?.fetchBoard.writer}</UserName>
            <UserDate>Date : 2020.03.16</UserDate>
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
        <DetailTitle>{data?.fetchBoard.title}</DetailTitle>
        <DetailPictureBox>
          <DetailImg src='https://i.pinimg.com/736x/ba/c9/23/bac923a682afa0b2ec4257ca5f31abb4.jpg'></DetailImg>
          {/* <DetailImg src={data?.fetchBoard.images} alt="이미지"></DetailImg> */}
        </DetailPictureBox>
        <DetailContent>{data?.fetchBoard.contents}</DetailContent>
        <DetailVideo>
          <video autoPlay controls loop muted>
            <source src="https://youtu.be/sFd8vx7XKpE"></source>
          </video>
        </DetailVideo>
        <DetailReactionBox>
          <ThumbsUp>
            <FontAwesomeIcon icon={faThumbsUp} />
            <LikeCount>{data?.fetchBoard.likeCount}</LikeCount>
          </ThumbsUp>
          <ThumsDown>
            <FontAwesomeIcon icon={faThumbsDown} />
            <DisLikeCount>{data?.fetchBoard.dislikeCount}</DisLikeCount>
          </ThumsDown>
          <Bookmark><FontAwesomeIcon icon={faBookmark}/></Bookmark>

        </DetailReactionBox>
      </DetailContents>
    </Container>

  )
}

// 마테리얼 ui

// docs 찾아보기 

// facebook 블로그 보기 !! 