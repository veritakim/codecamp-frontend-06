import {useQuery} from '@apollo/client'
import { useRouter } from 'next/router'
import {FETCH_BOARD} from './DetailBoard.queries'
import BoardDetailUi from './DetailBoard.presenter'

export default function DetailBoard (){
const router = useRouter()
  console.log(router) 
                    
  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number) // 83013
    }
  })
    console.log(data)


  return (
   <BoardDetailUi data ={data}/>
    
  )
}