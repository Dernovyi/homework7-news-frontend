import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsService} from './sevices/news.service';
import {FormsModule} from '@angular/forms';
import { OneNewsComponent } from './one-news/one-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    OneNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
