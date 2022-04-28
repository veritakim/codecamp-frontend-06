import { gql, useMutation, useQuery } from "@apollo/client"

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }

`

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`

export default function OptimisticUIPage () {
  const boardId = "6267692ea8255b002988cb2f"

  const {data} = useQuery(FETCH_BOARD, {
    variables: { boardId }
  })

  const [likeBoard] = useMutation(LIKE_BOARD)

  const onClickOptimisticUI = async () => {
    const result = await likeBoard({
      variables: {boardId},
      // refetchQueries: [{
      //   query: FETCH_BOARD,
      //   variables: {
      //     boardId
      //   }
      // }]
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0)+1
      }, 
      update(cache, { data }) {
        // 직접 캐쉬를 작성
        cache.writeQuery({
          query: FETCH_BOARD, // fetchBoard api를 직접 바꿔치기 한다
          variables: {boardId},
          data: {
            fetchBoard: {
              _id: boardId,
              __typename: "Board",
              likeCount: data.likeBoard
            }
          }
        })
      }
    })

    console.log(result)
  }

  return(
    <div>
      <h1>옵티미스틱 UI</h1>
      <div>현재카운트(좋아요): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기 버튼</button>
    </div>
  )
}