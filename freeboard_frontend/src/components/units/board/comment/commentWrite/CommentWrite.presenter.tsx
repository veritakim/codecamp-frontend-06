import {
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
} from "./CommentWrite.style";
import { CommentWriteUiProps } from "./CommentWrite.types";
import { Rate } from "antd";

export default function CommentWriteUi(props: CommentWriteUiProps) {

  return (
      <CommentArea>
        <CommentWriterArea>
          <CommentText>댓글</CommentText>
          <Rate onChange={props.handleChange} value={props.rateValue}/>
          
          <CommentWriterInput>
            <CommentWriter type="text" placeholder="작성자" onChange={props.onChangeCommentWriter} value={props.writer}></CommentWriter>
            <CommentWriter
              type="password" placeholder="비밀번호" onChange={props.onChangePassword} value={props.password}
            ></CommentWriter>
          </CommentWriterInput>
          <CommentContentsArea>
            <CommentContents placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." onChange={props.onChangeContents} maxLength={100} value={props.contents}></CommentContents>
            <CommentContentsBtnArea>
              <TextCount>{props.contents.length} / 100</TextCount>
              <CommentRegisterBtn onClick={props.commentRegister}>등록하기</CommentRegisterBtn>
            </CommentContentsBtnArea>
          </CommentContentsArea>
        </CommentWriterArea>
      </CommentArea>
  );
}
