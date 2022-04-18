import { UserOutlined } from "@ant-design/icons"
import { Avatar } from "antd"
import * as S from './DetailBoard.styled'

export default function DetailBoardUi (props) {
  console.log(props.data?.fetchBoard)

  return (
    <div>
      <S.Wrapper>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.ImgArea>
          {props.data?.fetchBoard.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.Imgs
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
           
          </S.ImgArea>
          <S.Body>
            <S.User>
              <S.AvatarImg src="/avatar.png" />
              <S.WriterName>{props.data?.fetchBoard.writer}</S.WriterName>
            </S.User>
            <S.ContentsBox>{props.data?.fetchBoard.contents}</S.ContentsBox>
          </S.Body>

        </S.Wrapper>
        <S.BtnArea>
          <S.BtnStyle onClick={props.onclickList}>글목록</S.BtnStyle>
          <S.BtnStyle onClick={props.updateBoard}>수정</S.BtnStyle>
          <S.BtnStyle onClick={props.deleteState}>삭제</S.BtnStyle>
        </S.BtnArea>
  </div>
  )
}
