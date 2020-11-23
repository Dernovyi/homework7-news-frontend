import { Component, OnInit } from '@angular/core';
import {News} from '../common/news';
import {NewsService} from '../sevices/news.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[];

  constructor(private newsService: NewsService,
              private router: Router) { }

  ngOnInit(): void {
    this.listNews();
  }

  private listNews(): void {
    this.newsService.getNewsList().subscribe(
      data => {
        this.news = data;
      }, error => console.log(error));
  }

  getNews(id: string): void {
    this.router.navigate(['one-news', id]);
  }

}

