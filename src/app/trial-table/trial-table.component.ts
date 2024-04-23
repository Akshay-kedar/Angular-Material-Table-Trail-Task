import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-trial-table',
  templateUrl: './trial-table.component.html',
  styleUrls: ['./trial-table.component.css']
})
export class TrialTableComponent  implements AfterViewInit {
clearFilter() {
throw new Error('Method not implemented.');
}
applyFilter(arg0: any) {
throw new Error('Method not implemented.');
}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  myDataArray = [
    {
        "League": "Test League",
        "player": "Travis Kruse",
        "PaymentDate": "01/02/2024",
        "Paid": 1.00,
        "Comp": 0.20
    },
    {
        "League": "Test League",
        "player": "Travis Kruse",
        "PaymentDate": "01/02/2024",
        "Paid": 1.00,
        "Comp": 0.20
    },
    {
        "League": "Test League",
        "player": "Travis Kruse",
        "PaymentDate": "01/02/2024",
        "Paid": 1.00,
        "Comp": 0.20
    },
    {
        "League": "Test League",
        "player": "Robert Sudduth",
        "PaymentDate": "03/26/2024",
        "Paid": 1.00,
        "Comp": 0.10
    },{
      "League": "Test League",
      "player": "Travis Kruse",
      "PaymentDate": "01/02/2024",
      "Paid": 1.00,
      "Comp": 0.20
  },
  {
      "League": "Test League",
      "player": "Travis Kruse",
      "PaymentDate": "01/02/2024",
      "Paid": 1.00,
      "Comp": 0.20
  },
  {
      "League": "Test League",
      "player": "Travis Kruse",
      "PaymentDate": "01/02/2024",
      "Paid": 1.00,
      "Comp": 0.20
  },
  {
      "League": "Test League",
      "player": "Robert Sudduth",
      "PaymentDate": "03/26/2024",
      "Paid": 1.00,
      "Comp": 0.10
  },{
    "League": "Test League",
    "player": "Travis Kruse",
    "PaymentDate": "01/02/2024",
    "Paid": 1.00,
    "Comp": 0.20
},
{
    "League": "Test League",
    "player": "Travis Kruse",
    "PaymentDate": "01/02/2024",
    "Paid": 1.00,
    "Comp": 0.20
},
{
    "League": "Test League",
    "player": "Travis Kruse",
    "PaymentDate": "01/02/2024",
    "Paid": 1.00,
    "Comp": 0.20
},
{
    "League": "Test League",
    "player": "Robert Sudduth",
    "PaymentDate": "03/26/2024",
    "Paid": 1.00,
    "Comp": 0.10
}
]

dataSource = new MatTableDataSource(this.myDataArray);
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

}
