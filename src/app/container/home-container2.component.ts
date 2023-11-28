// home-container.component.ts
import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { HomeState, AddData, SomeData, AddValue, SomeValue } from './home.state';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { combineLatest } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container2.component.html',
  styleUrls: ['./home-container2.component.css']
})
export class HomeContainerComponent2 implements OnDestroy {
  homeData: SomeData[] = [];
  homeValues: SomeValue[] = []; // Change the variable name to avoid conflict
  private subscription: Subscription;

  // New properties for user input
  userInput: SomeData = { id: '', name: '', progress: '', color: '', newProperty: '' };
  userValueInput: SomeValue = { id: 3, name: '', progress: '', color: '', newProperty: '' }; // Adjust the initial value of 'id'

  constructor(private store: Store, private router: Router) {
    this.subscription = combineLatest([
      this.store.select(HomeState.getHomeData),
      this.store.select(HomeState.getHomeValues)
    ]).pipe(
      filter(([data, values]) => Object.keys(data).length > 2 && Object.keys(values).length > 2) // Add your condition here
    ).subscribe(([data, values]) => {
      this.homeData = data;
      this.homeValues = values;
      console.log(111, Object.values(data));
      console.log(222, values);
    });
  }
  

  onButtonClick(): void {
    const dataArray = [this.userInput];
    this.store.dispatch(new AddData(dataArray));

    const valueArray = [this.userValueInput];
    this.store.dispatch(new AddValue(valueArray));

    // Clear input fields after updating the state
    this.userInput = { id: '5', name: '', progress: '', color: '', newProperty: '' };
    this.userValueInput = { id: 4, name: '', progress: '', color: '', newProperty: '' };
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToNgxsPage() {
    this.router.navigate(['/NGXS']);
  }

  goToNgxsPage2() {
    this.router.navigate(['/NGXS2']);
  }
}