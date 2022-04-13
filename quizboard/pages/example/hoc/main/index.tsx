import { gql, useQuery } from "@apollo/client"
import { WithAuth } from "../../../../src/components/commons/example/hoc/withAuth"

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email,
      name
    }
  }
`

function MainPage () {
  const {data} = useQuery(FETCH_USER_LOGGED_IN) 

  const onClickBtn = (number) => () => {
    console.log(number)
  }

  return (
    <div>
      <h1>메인페이지입니다</h1>
      <h1>{data?.fetchUserLoggedIn.name}님 환영합니다</h1>
      <button onClick={onClickBtn(123)}>HOF</button>
    </div>
  )
}

export default WithAuth(MainPage)