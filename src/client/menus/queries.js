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