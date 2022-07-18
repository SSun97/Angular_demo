import { gql } from "apollo-angular";

export const GET_Fruits = gql`query {
  allFruits{
    id
    quantity
    name
    price
  }
}`;

export const Fruits_ById = gql`query($fruitFilter: FruitFilter) {
  allFruits(filter: $fruitFilter){
    id
    quantity
    name
    price
  }
}`;

export const UPDATE_Fruit = gql`mutation($id: ID!, $name: String, $quantity: Int, $price: Int) {
  updateFruit(id: $id, name: $name, quantity:$quantity, price: $price){
    id
    name
    quantity
    price
  }
}`;
