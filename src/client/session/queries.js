import gql from "graphql-tag"

export const LIST = gql`
  query($session: Usession!){
    session(session: $session){
      id
      start_time
      end_time
      table{
        id
        number
      }
      orders{
        id
        number
        total
        meals{
          id
          amount
        }
      }
    }
  }
`