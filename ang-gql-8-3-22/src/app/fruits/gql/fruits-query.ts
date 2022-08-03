import { gql } from "apollo-angular";

export const GET_Fruits = gql `
  query {
  allFruits{
    id
    quantity
    name
    price
  }
}
`;

export const GET_FruitsByID = gql `
  query($fruitFilter: FruitFilter){
  allFruits(filter: $fruitFilter) {
    id
    name
    quantity
    price
  }
}

`;