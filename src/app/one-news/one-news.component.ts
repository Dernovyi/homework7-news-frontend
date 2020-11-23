import { Component, OnInit } from '@angular/core';
import {NewsService} from '../sevices/news.service';
import {ActivatedRoute, Router} from '@angular/router';
import {News} from '../common/news';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-one-news',
  templateUrl: './one-news.component.html',
  styleUrls: ['./one-news.component.css']
})
export class OneNewsComponent implements OnInit {

  id: Observable<string>;
  news: News;
  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.newsService.getNews(this.id).subscribe( data =>
    this.news = data,
      error => console.log(error));
    console.log(this.news);
  }

}
