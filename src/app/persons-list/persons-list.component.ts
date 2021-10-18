import { Component, OnInit } from '@angular/core';

export interface personsList {
  name?: string;
  lastname?: string;
  birthday?: string;
  nationality?: string;
}

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  list: personsList[] = [
    {name: "Andi", lastname: "Qokaj", birthday: "02.04.2000", nationality: "Albania"},
    {name: "Eni", lastname: "Semi", birthday: "27.10.1999", nationality: "England"},
    {name: "Beni", lastname: "Demaj", birthday: "12.07.2001", nationality: "Italy"},
  ];

 // list: personsList={name: "Andi", lastname: "Qokaj", birthday: "02.04.2000", nationality: "Albania"}

  constructor() { }

  ngOnInit(): void {
  }

}
