import { gql, useQuery } from "@apollo/client"
import { WithAuth } from "../../src/components/commons/hocs/withAuth"

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email,
      name
    }
  }
`

function LoginSuccessPage () {
  const {data} = useQuery(FETCH_USER_LOGGED_IN) 

 
  return (
    <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>
  )
}

export default WithAuth(LoginSuccessPage)