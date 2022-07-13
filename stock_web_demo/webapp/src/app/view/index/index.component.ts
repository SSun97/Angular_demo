import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  quoteList: any[] = [];

  constructor() { 
    this.getData();
  }

  ngOnInit(): void {
  }
  async getData() {
    let result = await axios.get('http://localhost:8080/api/index/quote');
    console.log(result.data);
    this.quoteList = result.data.data.items;
  }

}
