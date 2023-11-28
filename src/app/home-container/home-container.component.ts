// src/app/home-container.component.ts

import { Component, OnInit } from '@angular/core';
import { PersonService, Person } from '../data-service/data-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  personData = {
    name: '',
    age: null as number | null,
    email: ''
  };

  allPersons: Person[] = [];
  private addPersonSubscription: Subscription | undefined;

  isEditMode = false;
  editingPersonId: number | null | undefined = null; // Allow undefined

  constructor(private personService: PersonService) { }

  ngOnInit() {
    // Fetch all persons when the component is initialized
    this.fetchAllPersons();
  }

  private fetchAllPersons() {
    this.personService.getAllPersons().subscribe({
      next: persons => {
        this.allPersons = persons;
      },
      error: error => {
        console.error('Error fetching all persons:', error);
      }
    });
  }

  addPerson() {
    if (!this.isValidInput()) {
      console.error('Invalid input data');
      return;
    }

    if (this.isEditMode && this.editingPersonId !== null && this.editingPersonId !== undefined) {
      // Editing an existing person
      this.personService.editPerson(this.editingPersonId, this.personData).subscribe({
        next: response => {
          console.log(response);
          this.clearInputFields();
          this.isEditMode = false;
          this.editingPersonId = null; // Ensure null after editing
          this.fetchAllPersons();
        },
        error: error => {
          console.error(error);
        }
      });
    } else {
      // Adding a new person
      this.addPersonSubscription = this.personService.addPerson(this.personData).subscribe({
        next: response => {
          console.log(response);
          this.clearInputFields();
          this.fetchAllPersons();
        },
        error: error => {
          console.error(error);
        }
      });
    }
  }

  selectedPersonForEdit: Person | null = null;

  isValidInput2(): boolean {
    return this.personData.name.trim() !== '' &&
           !isNaN(this.personData.age as number) &&
           this.personData.email.trim() !== '';
  }

  editPerson(person: Person) {
    this.selectedPersonForEdit = person;
    this.personData = { ...person }; // Copy person properties to personData
    this.isEditMode = true;
    this.editingPersonId = person.id;
  }

  deletePerson(personId: number | null | undefined) {
    if (personId !== null && personId !== undefined) {
      this.personService.deletePerson(personId).subscribe({
        next: response => {
          console.log(response);
          this.fetchAllPersons();
        },
        error: error => {
          console.error(error);
        }
      });
    } else {
      console.error('Invalid person ID');
    }
  }

  private isValidInput(): boolean {
    return this.personData.name.trim() !== '' &&
      this.personData.email.trim() !== '' &&
      !isNaN(this.personData.age as number);
  }

  private clearInputFields(): void {
    this.personData = {
      name: '',
      age: null,
      email: ''
    };
  }
}
