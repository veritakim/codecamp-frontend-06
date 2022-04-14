import { useRecoilState } from "recoil"
import { userInfomationState} from "../../src/commons/stroe"
import { WithAuth } from "../../src/components/commons/hocs/withAuth"

// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       email,
//       name
//     }
//   }
// `

function LoginSuccessPage () {
  // const {data} = useQuery(FETCH_USER_LOGGED_IN) 
  const [userInfo] = useRecoilState(userInfomationState)
 
  return (
    <div>{userInfo.name}님 환영합니다</div>
  )
}

export default WithAuth(LoginSuccessPage)