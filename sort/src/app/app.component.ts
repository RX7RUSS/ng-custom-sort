import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  dataSource: MatTableDataSource<any>;
  
  private species = [
        {
          types: [
          {type: "Bird"},
          {type: "Fish"},
          {type: "Snakes"}
          ],
          facts: [
            {numberOfMembers: "9000 - 10000"},
            {numberOfMembers: "1000 - 2000"},
            {numberOfMembers: "4000 - 50000"}
          ],
          members: [
            {species: "Hawk"},
            {species: "Eagle"},
            {species: "Crow"}
          ]
        }
  ];

  displayedColumns: string[] = ['species', 'example', 'noOfMembers'];
  private columnDefinitions = [
      {
          matColumnDef : "species", 
          columnHeaderName: "Species", 
          value: (row) => `${row.types[0].type}`
      },
      {
          matColumnDef : "example", 
          columnHeaderName: "Example", 
          value: (row) => `${row.members[0].species}`
      },
      {
          matColumnDef : "noOfMembers", 
          columnHeaderName: "Number Of Members", 
          value: (row) => `${row.facts[0].numberOfMembers}`
      }
  ];
  constructor() {
    this.dataSource = new MatTableDataSource(this.species);

    this.dataSource.sortingDataAccessor = (row, property) => {
      switch(property) {
        case 'example': return row.members[0].type;
        case 'numberOfMembers': return row.facts.numberOfMembers;
        default: return row[property];
   }
};
  }
}
