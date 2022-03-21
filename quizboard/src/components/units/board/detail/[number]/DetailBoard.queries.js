
const FETCH_BOARD = gql `
query fetchBoard($number: Int){
fetchBoard(number: $number){
  writer
  title
  contents
  like
  number
}
}
`
