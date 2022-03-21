import {useQuery, gql} from '@apollo/client'
import { route } from 'next/dist/server/router'
import { Router, useRouter } from 'next/router'
import DetailBoard from '../../../../src/components/units/board/detail/[number]/DetailBoard.container'



export default function DynamicRoutedPage () {
  const router = useRouter()
  console.log(router) 
                    
  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number) // 83013
    }
  })
    console.log(data)


  return (
   <DetailBoard></DetailBoard>
  )
}

