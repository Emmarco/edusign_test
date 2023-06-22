import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatChipsModule} from '@angular/material/chips'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatSelectModule} from '@angular/material/select'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeapprenantComponent } from './listeapprenant/listeapprenant.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { SignatureComponent } from './signature/signature.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeapprenantComponent,
    ApprenantComponent,
    SignatureComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatSlideToggleModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatSidenavModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
