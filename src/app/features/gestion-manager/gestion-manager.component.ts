import { Component } from '@angular/core';
import { Compte } from 'src/app/models/compte.model';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-gestion-manager',
  templateUrl: './gestion-manager.component.html',
  styleUrls: ['./gestion-manager.component.css']
})
export class GestionManagerComponent {
  items!: Compte[];

  constructor(private dataService: CompteService) { }

  ngOnInit(): void {
    this.dataService.getItemsByRole('manager').subscribe(
      data => {
        this.items = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}