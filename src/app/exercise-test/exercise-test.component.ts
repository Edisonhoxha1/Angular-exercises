import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// export interface file {
//   name? : string;
//   size? : number;
//   type? : string;
// }

@Component({
  selector: 'app-exercise-test',
  templateUrl: './exercise-test.component.html',
  styleUrls: ['./exercise-test.component.css']
})
export class ExerciseTestComponent implements OnInit {

  file = [
    {
      name: 'file.jpg',
      size: 2120109,
      type: 'image/jpg'
    },
    {
      name: 'dsfds.jpg',
      size: 1234,
      type: 'img/jpg'
    }
  ];

  color = "red";

  inputValue1= "";
  inputValue2 = "";
  displayValue:string[] = [];

  isClick = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeColorButton() {
    this.color="blue";
  }

  getValue() {
    this.isClick = !this.isClick;
    // this.inputValue=value;
    // this.inputValue1;
    // this.inputValue2;
    // this.displayValue.push(this.inputValue1);
    // this.displayValue.push(this.inputValue2);
    // console.log(this.displayValue);
  }


}
