import gql from "graphql-tag"

export const LIST = gql`{
  menus{
    id
    name
    image
    meals{
      id
      name
    }
  }
}`

export const CREATE_ORDER = gql`
mutation($order: Iorder!){
  orders{
    create(order: $order){
      id
    }
  }
}
`