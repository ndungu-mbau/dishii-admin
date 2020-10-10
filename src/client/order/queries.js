import gql from "graphql-tag"

export const LIST = gql`
  query($order: Uorder!){
    order(order: $order){
      id
      number
      status
      session{
        id
      }
      meals{
        id
        meal{
          id
          name
          price
        }
        amount
      }
      total
    }
  }
`