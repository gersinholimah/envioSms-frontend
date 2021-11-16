import { EventService } from '../event.service';
import { Component, OnInit } from '@angular/core';
import { Event } from '../event.module';

@Component({
  selector: 'app-event-read',
  templateUrl: './event-read.component.html',
  styleUrls: ['./event-read.component.css']
})
export class EventReadComponent implements OnInit {

  events!: Event[]
  displayedColumns = ['id', 'message', 'hour', 'phone', 'action']
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.read().subscribe(events => {
       this.events = events
       console.log(events);
    })
  }

}

