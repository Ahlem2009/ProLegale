import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AvanceComponent } from './avance/avance.component';
import { TopbarComponent } from './topbar/topbar.component';
import { VaerticalComponent } from './vaertical/vaertical.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { GlobaleComponent } from './globale/globale.component';
import { InscritComponent } from './inscrit/inscrit.component';


import { CategoriesComponent } from './categories/categories.component';
import { RechercheComponent } from './recherche/recherche.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeaturesModule } from './features/features.module';
import { AuthModule } from './auth/auth.module';
import { PublicModule} from './public/public.module';

@NgModule({
  declarations: [
    AppComponent,
   
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    AvanceComponent,
    TopbarComponent,
    VaerticalComponent,
    ListArticleComponent,
    GlobaleComponent,
  
    InscritComponent,
    CategoriesComponent,
    RechercheComponent,
  SidebarComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    FormsModule,
    NgxPaginationModule,
    FeaturesModule,
    AuthModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
