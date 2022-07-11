import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(public route:ActivatedRoute, public router:Router) { 
    // http://localhost:4200/news/123?search=meinv#abc
    console.log(this.route.snapshot.params);
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
  }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['news', '123'], {
      queryParams: {
        username: 'admin',
      },
      fragment: 'abc'
    });
  }

}
