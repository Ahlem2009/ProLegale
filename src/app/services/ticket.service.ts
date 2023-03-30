import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ticket } from '../models/ticket.model';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  getArticles() {
    throw new Error('Method not implemented.');
  }
  getArticle() {
    throw new Error('Method not implemented.');
  }
  getDocument() {
    throw new Error('Method not implemented.');
  }

  baseUrl = 'http://localhost:3000/ticket';

  constructor(private http: HttpClient) {}

  getTicket() {
    return this.http.get<ticket []>(this.baseUrl);
  }
}