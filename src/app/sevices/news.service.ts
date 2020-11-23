import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../common/news';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl  = 'http://localhost:8080/api/news';
  constructor(private httpClient: HttpClient) { }

  getNewsList(): Observable<News[]> {
    return this.httpClient.get<News[]>(this.baseUrl);
  }

  getNews(id: Observable<string>): Observable<News> {
    console.log('Hello service');
    return this.httpClient.get<News>(`${this.baseUrl}/${id}`);
  }
}

