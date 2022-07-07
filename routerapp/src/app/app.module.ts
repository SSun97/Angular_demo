import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './view/index/index.component';
import { NewsComponent } from './view/news/news.component';
import { AboutComponent } from './view/about/about.component';
import { Page404Component } from './view/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NewsComponent,
    AboutComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
