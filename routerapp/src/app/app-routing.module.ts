import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './view/index/index.component';
import { NewsComponent } from './view/news/news.component';
import { AboutComponent } from './view/about/about.component';
import { Page404Component } from './view/page404/page404.component';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'news/:id',
    component: NewsComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
