// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
  id?: number;
  name: string;
  age: number;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private apiUrl = 'http://localhost:7080'; // Update with your Flask server URL

  constructor(private http: HttpClient) {}

  addPerson(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_person`, data);
  }

  getPerson(personId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_person/${personId}`);
  }

  editPerson(personId: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/edit_person/${personId}`, data);
  }

  deletePerson(personId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete_person/${personId}`);
  }
}
