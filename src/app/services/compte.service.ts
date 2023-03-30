import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../models/compte.model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient) { }

  getItemsByRole(role: string): Observable<Compte[]> {
    return this.http.get<Compte[]>(`http://localhost:3000/compte?role=${role}`);
  }}

