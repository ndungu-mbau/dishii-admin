import gql from "graphql-tag"

export const LIST = gql`
query($meal: Umeal!){
  meal(meal: $meal){
    id
    name
    description
    items
    img
    price
    menu{
      id
      name
    }
  }
}`

export const ADD = gql`
mutation($instance: Iinstance!){
  instances{
    create(instance: $instance){
      id
    }
  }
}
`