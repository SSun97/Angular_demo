import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Fruits } from '../fruits';
import { Fruits_ById, GET_Fruits, UPDATE_Fruit } from '../gql/fruits-query.ts';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private apollo:Apollo, private route: ActivatedRoute, private router: Router) { }
  fruitForm: Fruits = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0,
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      var id = Number(params.get('id'));
      this.getById(id);
    })
  }
  update() {
    this.apollo
    .mutate<{ updateFruit: Fruits }>({
      mutation: UPDATE_Fruit,
      variables: {
        id: this.fruitForm.id,
        name: this.fruitForm.name,
        quantity: this.fruitForm.quantity,
        price: this.fruitForm.price,
      },
      update: (store, { data }) => {
        if (data?.updateFruit) {
          var allData = store.readQuery<{ allFruits: Fruits[] }>({
            query: GET_Fruits,
          });
          if (allData && allData?.allFruits.length > 0) {
            var newData: Fruits[] = [...allData.allFruits];
            newData = newData.filter(_ => _.id !== data.updateFruit.id);
            newData.unshift(data.updateFruit);
            store.writeQuery<{ allFruits: Fruits[] }>({
              query: GET_Fruits,
              data: { allFruits: newData },
            });
          }
        }
      },
    })
    .subscribe(({ data }) => {
      this.router.navigate(['/']);
    });
  }
  getById(id:number) {
    this.apollo.watchQuery<{ allFruits: Fruits[] }>({
      query: Fruits_ById,
      variables: {fruitFilter: {id}},
    }).valueChanges.subscribe(({data}) => {
      var fruitById = data.allFruits[0];
      this.fruitForm = {
        id: fruitById.id,
        name: fruitById.name,
        quantity: fruitById.quantity,
        price: fruitById.price,
      }
    })
  }
}
