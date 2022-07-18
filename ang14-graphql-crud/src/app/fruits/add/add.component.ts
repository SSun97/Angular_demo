import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Fruits } from '../fruits';
import { CREATE_Fruit } from '../gql/fruits-mutation';
import { GET_Fruits } from '../gql/fruits-query.ts';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(private apollo: Apollo, private router: Router) {}

  fruitForm: Fruits = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0,
  };

  ngOnInit(): void {}

  create() {
    this.apollo
      .mutate<{ createFruit: Fruits }>({
        mutation: CREATE_Fruit,
        variables: {
          name: this.fruitForm.name,
          quantity: this.fruitForm.quantity,
          price: this.fruitForm.price,
        },
        update: (store, { data }) => {
          if (data?.createFruit) {
            var allData = store.readQuery<{ allFruits: Fruits[] }>({
              query: GET_Fruits,
            });
            if (allData && allData?.allFruits.length > 0) {
              var newData: Fruits[] = [...allData.allFruits];
              newData.unshift(data.createFruit);
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
}
