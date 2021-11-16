import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-event-crud',
  templateUrl: './event-crud.component.html',
  styleUrls: ['./event-crud.component.css']
})
export class EventCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigationToEventCreate(): void{
   this.router.navigate(['/events/creat'])
  }

}
