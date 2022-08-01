import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Fruits } from '../fruits';
import { UPDATE_Fruit } from '../gql/fruits-mutation';
import { Fruits_ById, GET_Fruits } from '../gql/fruits-query.ts';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private apollo: Apollo, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      var id = Number(params.get('id'));
      this.getById(id);
    })
  }
  getById(id: number){
    this.apollo.watchQuery<{allFruits: Fruits[]}>({
      query: Fruits_ById,
      variables: {fruitFilter: {id: id}}
    }).valueChanges.subscribe(({data}) => {
      var fruitById = data.allFruits[0];
      this.fruitForm = {
        id: fruitById.id,
        name: fruitById.name,
        quantity: fruitById.quantity,
        price: fruitById.price,
      };
    })
  }

  fruitForm: Fruits = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0,
  };

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
            if(allData && allData.allFruits.length > 0){
              var newData = [...allData.allFruits];
              newData = newData.filter(_ => _.id !== data.updateFruit.id);
              newData.unshift(data.updateFruit);

              store.writeQuery<{allFruits: Fruits[]}>({
                query: GET_Fruits,
                data: {allFruits: newData}
              });
            }
          }
        },
      })
      .subscribe(({ data }) => {
        this.router.navigate(['/']);
      });
    console.log(this.fruitForm);
  }
}
