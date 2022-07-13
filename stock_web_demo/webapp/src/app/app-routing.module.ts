import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './view/index/index.component';
import { ChooseComponent } from './view/choose/choose.component';
import { NewstockComponent } from './view/newstock/newstock.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'screener',
    component: ChooseComponent,
  },
  {
    path: 'newstock',
    component: NewstockComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
