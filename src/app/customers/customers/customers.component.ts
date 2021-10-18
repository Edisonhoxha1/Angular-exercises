import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  //ex1
  customers:string = "Cusomers";

 //ex2  
  customers1 = [
    'Ana',
    'Ben',
    'john'
  ]

  onlineOnly: boolean = true;

 //ex3 
  elementClass:string = "customer-element";

 //ex4 
  setElementStyle: boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

}
