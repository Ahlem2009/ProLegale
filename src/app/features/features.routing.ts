import {  Routes } from '@angular/router';

import {GestionClientComponent} from './gestion-client/gestion-client.component'
import {GestionExpertComponent} from './gestion-expert/gestion-expert.component'
import {GestionManagerComponent} from './gestion-manager/gestion-manager.component'
import {GestionOffreComponent} from './gestion-offre/gestion-offre.component';
import {BoutonCreerOffreComponent} from './gestion-offre/bouton-creer-offre/bouton-creer-offre.component'
import {CreerOffreComponent} from './gestion-offre/creer-offre/creer-offre.component'
import {DashboardComponent} from './dashboard/dashboard.component';
import {CardsComponent} from './dashboard/cards/cards.component'
import { ContentComponent } from './dashboard/content/content.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { GestionDocumentComponent } from './gestion-document/gestion-document.component';
import { GestionTicketComponent } from './gestion-ticket/gestion-ticket.component';
import { CreationTicketComponent } from './gestion-ticket/creation-ticket/creation-ticket.component';
import { CreationDocumentComponent } from './gestion-document/creation-document/creation-document.component';

export const FeauturesRoutingModule: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"gestion-clt",component:GestionClientComponent},
  {path:"gestion-expert",component:GestionExpertComponent},
  {path:"gestion-manager",component:GestionManagerComponent},
  {path:"gestion-offre",component:GestionOffreComponent},
  {path:"creerOffre",component:BoutonCreerOffreComponent},
  {path:"creer-offre",component:CreerOffreComponent},
  {path:"cards",component:CardsComponent},
  {path:"content",component:ContentComponent},
  {path:"header",component:HeaderComponent},
  {path:"document",component:GestionDocumentComponent},
  {path:"creation-offre",component:CreerOffreComponent},
  {path:"tickets",component:GestionTicketComponent},
  {path:"tickets/creer",component:CreationTicketComponent},
  {path:"document/creer",component:CreationDocumentComponent},

]
