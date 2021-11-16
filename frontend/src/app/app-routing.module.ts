import { EventUpdateComponent } from './components/events/event-update/event-update.component';
import { EventsCreatComponent } from './components/events/events-creat/events-creat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { EventCrudComponent } from "./views/event-crud/event-crud.component";
import { EventsDeleteComponent } from './components/events/events-delete/events-delete.component';



const routes: Routes = [
  {
  //rota raiz
  path: "",
  component: HomeComponent
},  {
  path: "events",
  component: EventCrudComponent
}, {
  path: "events/creat",
  component: EventsCreatComponent
}, {
  path: "events/update/:id",
  component: EventUpdateComponent
}, {
  path: "events/delete/:id", 
  component: EventsDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
