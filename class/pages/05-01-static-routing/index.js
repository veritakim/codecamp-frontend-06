import {useRouter} from 'next/router'

export default function StaticRoutingPage () {
  const router = useRouter()
  
  const onClickMove = () => {
    // https:localhost:3000 이 생략되어 있다
    router.push("/05-02-static-routed")
  }

  return (
    <div>
      <button onClick={onClickMove}>페이지 이동하기</button>
    </div>
  )
}

