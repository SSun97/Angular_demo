import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { map, Observable, of } from 'rxjs';
import { Fruits } from '../fruits';

import { GET_Fruits } from '../gql/fruits-query';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  allFruits$: Observable<Fruits[]> = of([]);

  ngOnInit(): void {
    this.allFruits$ = this.apollo.watchQuery<{ allFruits: Fruits[] }>({
      query: GET_Fruits, fetchPolicy: 'no-cache'
    }).valueChanges.pipe(map((result) => result.data.allFruits));
  }
}
