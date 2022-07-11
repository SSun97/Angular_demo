import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './view/index/index.component';
import { NewsComponent } from './view/news/news.component';
import { AboutComponent } from './view/about/about.component';
import { Page404Component } from './view/page404/page404.component';
import { AdminComponent } from './view/admin/admin.component';
import { UserComponent } from './view/user/user.component';
import { ProductComponent } from './view/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NewsComponent,
    AboutComponent,
    Page404Component,
    AdminComponent,
    UserComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
