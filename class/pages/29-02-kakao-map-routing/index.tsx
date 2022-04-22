import { useRouter } from "next/router"
import Link from "next/link"

export default function KakaoMapButtonPage () {

  const router = useRouter()

  const onClickMoveToMap = () => {
    router.push('/29-03-kakao-map-routed')
  }

  return (
    <div>
      <button onClick={onClickMoveToMap}>맵으로 이동</button>
      <Link href='/29-03-kakao-map-routed'><a>맵으로 이동</a></Link>
    </div>
  )
}