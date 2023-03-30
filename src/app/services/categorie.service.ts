import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  baseUrl = 'http://localhost:3000/themes';

  constructor(private http: HttpClient) {}

  getCategorie() {
    return this.http.get<Categorie []>(this.baseUrl);
  }

  getLimitCategorie() {
    return this.http.get<Categorie []>(`${this.baseUrl}?_limit=3`);
  }

  // getCategoryByName(nom:string):Observable<Categorie>{
  //   return this.http.get<Categorie>(`${this.baseUrl}?nom=${nom}`)

  // }
}
