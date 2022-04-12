import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {useRecoilState } from "recoil"
import { accessTokenState } from "../../src/commons/store";


const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email,
      name
    }
  }
`

export default function LoginSuccessPage () {
  const router = useRouter()
  const {data} = useQuery(FETCH_USER_LOGGED_IN)
  const [accessToken,] = useRecoilState(accessTokenState)
  console.log("g", accessToken)
  useEffect(() => {
    if(!accessToken) {
      alert("로그인을 해주세요")
      router.push('/login')
    }
  }, [])

  console.log("data", data?.fetchUserLoggedIn.name);
  return (
    <div>
      {data?.fetchUserLoggedIn &&
        <div>
          <div>로그인 성공</div>
          <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>
        </div>
      }
    </div>
  )
}