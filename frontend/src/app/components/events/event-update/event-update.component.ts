import { EventService } from './../../events/event.service';
import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../event.module';




@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {
  event!: Event
  constructor(
    private eventService: EventService, 
    private router: Router,
    
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.eventService.readById(id!).subscribe(event => {
      this.event = event
    });
  }

  updateEvent(): void {
    this.eventService.update(this.event).subscribe(() =>{
     this.eventService.showMessage('Produto atualizado com sucesso!')
     this.router.navigate(['/events'])
    })
  }

  cancel(): void{
    this.router.navigate(['/events'])
  }







  name = 'Angular ' + VERSION.major;
  dataimage:any;

   @ViewChild('fileInput') 
   fileInput!: ElementRef;
   fileAttr = 'Escolher arquivo .csv';


  uploadFileEvt(csvFile: any) {
    if (csvFile.target.files && csvFile.target.files[0]) {
      this.fileAttr = '';
      let files: File[] = Array.from(csvFile.target.files);
      files.forEach((file: { name: string; }) =>{
        this.fileAttr += file.name ;
      });

     
      
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = 'Selecionar arquivo csv';
    }
  }




}
