// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomeContainerComponent2 } from './container/home-container2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialTableComponent } from './home-container/material-table/material-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';  // Import NgxsModule
import { HomeState } from './container/home.state'; // Correct the path to home.state

@NgModule({
  declarations: [AppComponent, HomeContainerComponent, HomeContainerComponent2, MaterialTableComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxsModule.forRoot([HomeState]), // Include NgXS state in NgxsModule.forRoot
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
