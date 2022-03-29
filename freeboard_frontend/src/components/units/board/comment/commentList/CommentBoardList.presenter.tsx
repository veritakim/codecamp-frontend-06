import { CommentArea } from "./CommentBoardList.style";
import { CommentBoardListUiProps } from "./CommentBoardList.types";

export default function CommentBoardListUi(props: CommentBoardListUiProps) {
  console.log(props);
  return (
      <CommentArea>
        {props.data?.fetchBoardComments.map((el: any) => (
          <div key={el._id}>
            <div>{el.writer}</div>
            <div>{el.contents}</div>
          </div>
        ))}
      </CommentArea>
  );
}
