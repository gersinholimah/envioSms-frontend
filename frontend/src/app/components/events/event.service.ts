import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Event } from './event.module';

@Injectable({ 
  providedIn: 'root'
})
export class EventService {

  baseUrl = " http://localhost:3000/events"

  constructor( 
    private snackBar: MatSnackBar,
    private http: HttpClient 
    ) { }


showMessage(msg: string): void{
     this.snackBar.open(msg, 'x', {
         duration: 3000,
         horizontalPosition: "right",
         verticalPosition: "top"
     })
}

create(event: Event): Observable<Event> {
 return this.http.post<Event>(this.baseUrl, event)
}

read(): Observable<Event[]> {
  return this.http.get<Event[]> (this.baseUrl);
}

readById(id: string): Observable<Event> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.get<Event>(url);
}

update(event: Event): Observable<Event>{
  const url = `${this.baseUrl}/${event.id}`;
  return this.http.put<Event>(url, event);
}

delete(id: number): Observable<Event>{
  const url =  `${this.baseUrl}/${id}`;
  return this.http.delete<Event>(url);
}

}
