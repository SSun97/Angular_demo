import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AddTestComponent } from './add-test/add-test.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'add',
  component: AddComponent
},
{
  path: 'add-test',
  component: AddTestComponent
},{
  path: 'edit/:id',
  component: EditComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }
