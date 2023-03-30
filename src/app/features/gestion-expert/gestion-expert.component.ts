import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/models/compte.model';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-gestion-expert',
  templateUrl: './gestion-expert.component.html',
  styleUrls: ['./gestion-expert.component.css']
})
export class GestionExpertComponent implements OnInit {
  items!: Compte[];

  constructor(private dataService: CompteService) { }

  ngOnInit(): void {
    this.dataService.getItemsByRole('expert').subscribe(
      data => {
        this.items = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}