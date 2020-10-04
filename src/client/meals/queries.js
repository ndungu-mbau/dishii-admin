import gql from "graphql-tag"

export const LIST = gql`
  query($menu: Umenu!){
    menu(menu: $menu){
      id
      name
      image
      meals{
        id
        name
        img
        price
      }
    }
  }
`