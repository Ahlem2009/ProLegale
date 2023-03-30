import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  getArticle() {
    throw new Error('Method not implemented.');
  }
  baseUrl = 'http://localhost:3000/article';

  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get<Article []>(this.baseUrl);
 
  }

  getArticleCategorie(nom:string):void{
    
  }
}
