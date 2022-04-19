import { useRouter } from "next/router"
import { ComponentType, useEffect } from "react"

export const WithAuth = (Component: ComponentType) => <P extends {}>(props: P) => {
  const router = useRouter()

  // 권한 분기 로직 추가하기
  useEffect(() => {
    if(!localStorage.getItem("accessToken")) {
      // 로그인이 안된 것
      alert("로그인 후 이용가능합니다")
      router.push('/23-04-login-check')
    }
  }, [])


  return <Component {...props} />

}