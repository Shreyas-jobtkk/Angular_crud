// home-container.component.ts

import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface TableData {
  id: number;
  name: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent {
  sampleData: TableData[] = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
    { id: 3, name: 'Bob Smith', age: 28, email: 'bob@example.com' },
    // Add more sample data as needed
  ];

  dataSource = new MatTableDataSource<TableData>(this.sampleData);
}
