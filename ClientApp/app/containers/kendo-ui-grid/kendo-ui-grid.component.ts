import { Component, OnInit } from '@angular/core';
import { products } from './products';
import { process, State } from '@progress/kendo-data-query';
import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'kendo-ui-grid',
  templateUrl: './kendo-ui-grid.component.html',
  styleUrls: ['./kendo-ui-grid.component.scss']
})
export class KendoUiGridComponent implements OnInit {

  public state: State = {
    skip: 0,
    take: 10,

    // Initial filter descriptor
    // filter: {
    //   logic: 'and',
    //   filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
    // }
  };

  constructor() { }

  ngOnInit() {
  }



  public gridData: GridDataResult = process(products, this.state);

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(products, this.state);
  }

}
