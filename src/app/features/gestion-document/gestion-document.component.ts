import { Component, OnInit } from '@angular/core';
import { Article, Tag } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-gestion-document',
  templateUrl: './gestion-document.component.html',
  styleUrls: ['./gestion-document.component.css']
})
export class GestionDocumentComponent implements OnInit{
  item2: Article[] = [];
 
  constructor(
    private service: ArticleService) 
   { }
 
  ngOnInit() : void {
    this.service.getArticles().subscribe( allData => {
      this.item2 = allData;
      console.log(this.item2);
 
    }
    );
  }

  }