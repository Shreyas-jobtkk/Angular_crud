// app.module.ts

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeContainerComponent } from './home-container/home-container.component'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialTableComponent } from './home-container/material-table/material-table.component';

@NgModule({
  declarations: [AppComponent, HomeContainerComponent, MaterialTableComponent],
  imports: [BrowserModule, AppRoutingModule,MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
