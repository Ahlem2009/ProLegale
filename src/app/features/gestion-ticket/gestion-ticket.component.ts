import { Component } from '@angular/core';
import { ticket } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-gestion-ticket',
  templateUrl: './gestion-ticket.component.html',
  styleUrls: ['./gestion-ticket.component.css']
})
export class GestionTicketComponent {
  item2: ticket[] = [];
  constructor(
    private service: TicketService
  ) { }
 
  ngOnInit() {
  
    this.GetTicket();
  }
  
  GetTicket() {
    this.service.getTicket().subscribe((allData) => {
      this.item2 = allData;
      console.log(this.item2);
 
    });}
  }