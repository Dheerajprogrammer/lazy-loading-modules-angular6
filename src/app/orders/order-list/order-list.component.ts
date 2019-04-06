import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor() { }
  public CustomerDetail = [{
    custName: 'Hello',
    custAge: 25,
    currentDate: new Date()
  }, {
    custName: 'DK Hello',
    custAge: 28,
    currentDate: new Date()
  }];


  ngOnInit() {
  }

}
