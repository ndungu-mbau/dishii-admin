import gql from "graphql-tag"

export const LIST_TABLES = gql`{
  tables{
    id
    seats
    number
  }
}`

export const CREATE_SESSION = gql`
  mutation($session: Isession!){
    sessions{
      create(session: $session){
        id
      }
    }
  }
`