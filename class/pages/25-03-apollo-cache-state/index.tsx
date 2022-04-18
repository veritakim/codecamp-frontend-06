import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      update( cache, { data } ) {
        // deleteBoard요청하고 받은 리턴값
        const deletedId = data.deleteBoard
        cache.modify({
          fields: {
            // 현재 페치보드 상태(prev)에서 삭제된 보드 지우기
            fetchBoards: (prev, { readField }) => {
              // _id가 배열로 저장된 prev에서 deletedId 와 같은 _id 제거
              // filter로 삭제된 _id와 다른 데이터만 남겨서 return 해주기
              // el._id 를 사용할 수 없기 때문에 readField로 el 에서 _id를 꺼내온다.
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return filteredPrev;
            },
          }
        })
      }
    });
  };

  const onClickSubmit = async () => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다~",
          contents: "내용입니다@@@",
        },
      },
      update(cache, { data }) {
        // data.createBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              // [{writer: , title:, contents ..}, {}, {}, {},]
              // createBoard 의 요청으로 방금 막 만들어진 게시글이 맨 앞으로 들어온다.
              // 지금 등록한 글 + ...prev
              return [data.createBoard, ...prev]; // 스프레드 연산자를 통해 기존 데이터 모두 불러오기
            },
          }
        })
      }
    });
  };


  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}

  // 1. 구조분해 할당으로 함수 파라미터 받기
  // function onClickAAA({ name, age, school }){
  //   console.log(name)
  // }

  // const child = {
  //   name: "철수",
  //   age: 13,
  //   school: "다람쥐초등학교"
  // }
  // onClickAAA(child)

  // 2. 안좋은 옛날 방식
  // function onClickAAA(name, age, school){
  //   console.log(name)
  // }

  // const name: "철수"
  // const age: 13
  // const school: "다람쥐초등학교"
  // onClickAAA(name, school)