import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './news/news.component';
import {OneNewsComponent} from './one-news/one-news.component';


const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {path: 'one-news/:id', component: OneNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
