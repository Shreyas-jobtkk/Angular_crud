// material-table.component.ts

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

interface TableData {
  id: number;
  name: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {
  @Input() dataSource!: MatTableDataSource<TableData>;

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'name', 'age', 'email'];

  ngOnInit() {
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }
}
