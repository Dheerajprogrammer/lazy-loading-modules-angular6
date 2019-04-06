import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Input()
  ngStyle: { [key: string]: string; }
  constructor() { }
  public CustomerDetail = [{
    custName: 'SD',
    custAge: 25,
    currentDate: new Date()
  }, {
    custName: 'DK',
    custAge: 28,
    currentDate: new Date()
  }];

  ngOnInit() {
  }

}
