import { useRouter } from "next/router"
import { Component, useEffect } from "react"

// @ts-ignore
export const WithAuth = (Component) => (props) => {
  const router = useRouter()

  useEffect(() => {
    if(!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용가능합니다")
      router.push('/example/hoc/login')
    }
  }, [])


  return <Component {...props} />

}