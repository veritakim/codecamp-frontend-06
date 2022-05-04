import { useRouter } from 'next/router'
import Head from 'next/head'
import { gql, request } from 'graphql-request'

export default function BoardDetailPage (props) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <meta property='og:title' content={props.myboardData?.title} />
        <meta property='og:description' content={props.myboardData?.contents} />
        <meta property='og:image' content={props.myboardData?.images[0]} />
      </Head>

      <div>
        안녕하세요! 게시글 상세 페이지 입니다!!!, 게시글 _id는 {router.query.boardId} 
      </div>
    </div>
  )
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      contents
      title
      writer
      images
    }
  }
`

// 정해진 이름. page에서 쓸 수있다. component는 X
// 이 페이지는 서버사이드 렌더링 할래!! 
export const getServerSideProps = async (context) => {
  // 데이터를 요청할 것!!
  // const { data } = useQuery(FETCH_BOARD) 이건 안된다
  // "6271eac0a8255b002988f850"
  const result = await request("http://backend06.codebootcamp.co.kr/graphql", FETCH_BOARD, { boardId: context.query.boardId })


  return {
    props: {
      myboardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images
      }
    }
  }

}