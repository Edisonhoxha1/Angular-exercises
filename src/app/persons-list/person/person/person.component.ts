import { Component, Input, OnInit } from '@angular/core';
import { personsList } from '../../persons-list.component';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() listperson: personsList []=[];
  @Input() counter:any;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.listperson);
  }


}
