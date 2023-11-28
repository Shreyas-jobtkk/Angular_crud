// src/app/person.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'http://localhost:7080';  // Update with your Flask API endpoint

  constructor(private http: HttpClient) { }

  addPerson(personData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_person`, personData);
  }
}
