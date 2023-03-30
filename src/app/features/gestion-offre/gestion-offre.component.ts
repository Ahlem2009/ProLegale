import { Component } from '@angular/core';
import { Abonnement } from 'src/app/models/abonnement.model';
import { AbonnementService } from 'src/app/services/abonnement.service';

@Component({
  selector: 'app-gestion-offre',
  templateUrl: './gestion-offre.component.html',
  styleUrls: ['./gestion-offre.component.css']
})
export class GestionOffreComponent {
  item: Abonnement[] = [];
  constructor( private service: AbonnementService ) { }
 
  ngOnInit() {
  
    this.GetAbonnement();
  }
  
  GetAbonnement(){
    this.service.getAbonnements().subscribe((allData) => {
      this.item = allData;
      console.log(this.item);
 
    });}

}

