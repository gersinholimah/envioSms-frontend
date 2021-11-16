import { EventService } from './../../events/event.service';
import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../event.module';
@Component({
  selector: 'app-events-delete',
  templateUrl: './events-delete.component.html',
  styleUrls: ['./events-delete.component.css']
})
export class EventsDeleteComponent implements OnInit {
  event!: Event

  constructor(
    private eventService: EventService, 
    private router: Router,
    
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.eventService.readById(id!).subscribe(event => {
      this.event = event;
    });
  }

  deleteEvent(): void {
    this.eventService.delete(this.event.id!).subscribe(() =>{
     this.eventService.showMessage('Agendamento Descartado com sucesso!');
     this.router.navigate(['/events']);
    });
  }



  cancel(): void{
    this.router.navigate(['/events'])
  }


}
