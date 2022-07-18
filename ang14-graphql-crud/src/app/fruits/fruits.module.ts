import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { AddTestComponent } from './add-test/add-test.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    AddTestComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule,
    FormsModule
  ]
})
export class FruitsModule { }