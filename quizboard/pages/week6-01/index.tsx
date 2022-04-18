import { gql, useMutation, useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import { useForm } from "react-hook-form"
import Input01 from "../../src/components/commons/inputs"

const Wrapper = styled.div`
  width: 1200px;
  height: 900px;
  margin: 0 auto;
  padding: 30px 20px;
`
const BoardWrapper = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid black;
  display: flex;
`

const BoardTitle = styled.div`
  width: 800px;
  height: 80px;

`

const BoardWriter = styled.div`
  width: 400px;
  height: 80px;
`

const WriteBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 80px;
  justify-content: center;
  margin-top: 190px;
`

const BoardDelete = styled.div``


const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`
interface IDataProps {
  writer: string
  title: string
  password: string
  contents: string
}

export default function apolloCachePage () {
  const {data} = useQuery(FETCH_BOARDS)
  const {register, handleSubmit, formState} = useForm()

  const [createBoard] = useMutation(CREATE_BOARD)
  const [deleteBoard] = useMutation(DELETE_BOARD)

  const onClickSubmit = async (data: IDataProps) => {
    try {
      const result = createBoard({
        variables: {
          createBoardInput: data
        } ,
        // refetchQueries: [{
        //   query: FETCH_BOARDS
        // }]
        update(cache, {data}) {
          cache.modify({
            fields: {
              fetchBoards: (prev) => {return [data.createBoard, ...prev]}
            }
          })
        }
      })
      alert("등록 완료")
    } catch (error) {
      alert(error.message)
    }
  }

  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: {boardId},
      // refetchQueries: [{
      //   query: FETCH_BOARDS
      // }]
      update(cache, {data}) {
        const deletedId = data.deleteBoard
        cache.modify({
          fields: {
            fetchBoards: (prev, {readField}) => {
              const filteredPrev = prev.filter(
              (el) => readField("_id", el) !== deletedId
              )

              return filteredPrev
            }
          }
        })
      }
    })
  }

  return (
    <Wrapper>
      <BoardWrapper>
        <BoardTitle>제목</BoardTitle>
        <BoardWriter>작성자</BoardWriter>
      </BoardWrapper>
        {data?.fetchBoards.map((el) => (
          <BoardWrapper key={el._id}>
            <BoardTitle>{el.title}</BoardTitle>
            <BoardWriter>{el.writer}</BoardWriter>
            <BoardDelete onClick={onClickDelete(el._id)}>[X]</BoardDelete>
          </BoardWrapper>
        ))}

      <WriteBox>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          작성자 : <Input01 type="text" register={register("writer")}/>
          비밀번호 : <Input01 type="password" register={register("password")}/>
          제목 : <Input01 type="text" register={register("title")}/>
          내용 : <Input01 type="text" register={register("contents")}/>
          <button>등록하기</button>
        </form>
      </WriteBox>
    </Wrapper>
  )
}