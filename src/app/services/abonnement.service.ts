import { Injectable } from '@angular/core';
import { Abonnement } from '../models/abonnement.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  baseUrl = 'http://localhost:3000/abonnement';

  constructor(private http: HttpClient) {}

  getAbonnements() {
    return this.http.get<Abonnement []>(this.baseUrl);
  }
}
