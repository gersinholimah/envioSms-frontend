import { AppComponent } from './../../../app.component';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import { Event } from '../event.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-events-creat',
  templateUrl: './events-creat.component.html',
  styleUrls: ['./events-creat.component.css']
})
export class EventsCreatComponent implements OnInit {
  public form!: FormGroup;

   event: Event = {  
  message: '',
  hour: null,
  phone: ''
  
}

 
  constructor( 
    private fb: FormBuilder,
     private eventService: EventService,
    private Router: Router,) { 

this.form = this.fb.group({
  message: ['', Validators.required],
  hour: ['', Validators.required],
  phone: ['', Validators.required]

})

    }
  propLegal = 'Mensagem'
  
  ngOnInit(): void {
  }
   createEvent(): void{
    this.eventService.create(this.event).subscribe(() => {  
    this.eventService.showMessage('Agendamento realizado')
    this.Router.navigate(['/events']);
  })
  }
   cancel(): void{
    this.Router.navigate(['/events'])
  } 




 
  name = 'Angular ' + VERSION.major;
  dataimage:any;

   @ViewChild('fileInput') 
   fileInput!: ElementRef;
   fileAttr = '';


   uploadFileEvt(csvFile: any) {
    if (csvFile.target.files && csvFile.target.files[0]) {
      this.fileAttr = '';
      let files: File[] = Array.from(csvFile.target.files);
      files.forEach((file: { name: string; }) =>{
        this.fileAttr += file.name ;
      });

     
      
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = '';
    }
  }
 
 















  
}
