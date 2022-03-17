import {useState} from 'react'
import { useQuery, gql} from '@apollo/client'

// const FETCH_BOARD = gql `
//   query{
//     fetchBoard(number: 83289){
//       writer
//       title
//       contents
//       like
//     }
//   }
//   `

export default function GraphqlQueryPage () {
//   const [writer, setWriter] = useState("");
//   const [title, setTitle] = useState("");
//   const [contents, setContents] = useState("");

//   const [callApi] = useQuery(FETCH_BOARD);

//   const callGraphqlApi = async () => {

//     const result = await callApi()

//     console.log(result.fetchBoard.writer);
//   }

  return (
    <div>
      <button onClick={callGraphqlApi}>조회하기</button>
    </div>
  )

}