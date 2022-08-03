import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Fruits } from '../fruits';
import { UPDATE_Fruit } from '../gql/fruits-mutation';
import { GET_Fruits, GET_FruitsByID } from '../gql/fruits-query';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  fruitForm: Fruits = {
    name: '',
    quantity: 0,
    price: 0,
    id: 0,
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      var id = Number(params.get('id'));
      this.getById(id);
    })
  }
  getById(id: number) {
    this.apollo.watchQuery<{allFruits: Fruits[]}>({
      query: GET_FruitsByID,
      variables: {fruitFilter: {id}}
    }).valueChanges.subscribe((result) => {
      this.fruitForm =  {
        id: result.data.allFruits[0].id,
        name: result.data.allFruits[0].name,
        quantity: result.data.allFruits[0].quantity,
        price: result.data.allFruits[0].price,
      };
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
