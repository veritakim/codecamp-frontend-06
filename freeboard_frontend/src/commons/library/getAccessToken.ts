import {GraphQLClient, gql} from 'graphql-request'

const RESTORE_ACCESSTOKEN = gql`
mutation restoreAccessToken {
  restoreAccessToken {
    accessToken
  }
}
`

export async function getAccessToken () {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend06.codebootcamp.co.kr/graphql",
      { credentials: "include" }
      )
  
    const result = await graphQLClient.request(RESTORE_ACCESSTOKEN)
    const newAccessToken = result.restoreAccessToken.accessToken
    return newAccessToken

  } catch(error: any) {console.log(error.message)}
  
}