// src/app/home-container.component.ts
import { Component, OnInit } from '@angular/core';
import { PersonService } from '../data-service/data-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  personData = {
    name: '',
    age: null as number | null, // Update type definition for age
    email: ''
  };

  // Subscription to keep track of the observable subscription
  private addPersonSubscription: Subscription | undefined;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    // Example: Log the value returned by getPerson for person with ID 1
    this.personService.getPerson(3).subscribe({
      next: person => {
        console.log('Person data:', person);
      },
      error: error => {
        console.error('Error getting person:', error);
      }
    });
  }

  // Function to add a new person
  addPerson() {
    // Validate input data
    if (!this.isValidInput()) {
      console.error('Invalid input data');
      // Provide user feedback about the invalid input
      return;
    }

    // Unsubscribe from the previous subscription if it exists
    if (this.addPersonSubscription) {
      this.addPersonSubscription.unsubscribe();
    }

    // Call the service to add a person
    this.addPersonSubscription = this.personService.addPerson(this.personData).subscribe({
      next: response => {
        console.log(response);
        // Handle success: Update UI, show success message, etc.
        // Clear the input fields after success
        this.clearInputFields();
      },
      error: error => {
        console.error(error);
        // Handle error: Show user-friendly error message
      }
    });
  }

  // Function to validate input data
  private isValidInput(): boolean {
    return this.personData.name.trim() !== '' &&
           this.personData.email.trim() !== '' &&
           !isNaN(this.personData.age as number); // Type assertion for age
  }

  // Function to clear input fields
  private clearInputFields(): void {
    this.personData = {
      name: '',
      age: null,
      email: ''
    };
  }
}
