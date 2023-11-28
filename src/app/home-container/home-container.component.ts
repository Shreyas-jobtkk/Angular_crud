// src/app/home-container.component.ts
import { Component } from '@angular/core';
import { PersonService } from '../data-service/data-service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent {
  personData = {
    name: '',
    age: null,
    email: ''
  };

  constructor(private personService: PersonService) { }

  addPerson() {
    this.personService.addPerson(this.personData).subscribe(response => {
      console.log(response);
      // Handle success or update your UI accordingly
      // Clear the input fields after success
      this.personData = {
        name: '',
        age: null,
        email: ''
      };
    }, error => {
      console.error(error);
      // Handle error
    });
  }
}
