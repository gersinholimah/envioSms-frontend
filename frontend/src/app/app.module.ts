import { MatTable, MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
//não ultilizar as 2 diretivas abaixo
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';

import { HomeComponent } from './views/home/home.component';
import { EventCrudComponent } from './views/event-crud/event-crud.component';
import { EventsCreatComponent } from './components/events/events-creat/events-creat.component';
import { EventReadComponent } from './components/events/event-read/event-read.component';

import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatIconModule } from '@angular/material/icon';

import { EventUpdateComponent } from './components/events/event-update/event-update.component';   //altera pontuação de moeda para pt-BR
import { CommonModule } from '@angular/common';


 import { EventsDeleteComponent } from './components/events/events-delete/events-delete.component';

 

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    //não ultilizar as 2 diretivas abaixo
    EventCrudComponent,
    RedDirective,
    ForDirective,
    EventsCreatComponent,
    EventsDeleteComponent,
    EventReadComponent,
    EventUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
     MatIconModule,
    MatSortModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
