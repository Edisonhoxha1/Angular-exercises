import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-method-exercise',
  templateUrl: './string-method-exercise.component.html',
  styleUrls: ['./string-method-exercise.component.css']
})
export class StringMethodExerciseComponent implements OnInit {

  stringtest: string= "stringvaluedfsdfd";
  stringtestlength = this.stringtest.length;

  str1:string = "Edison";
  str2:string = "Hoxha";
  str1str2:string = this.str1.concat(' ', this.str2);
  uppercaseString = this.str1str2.toUpperCase();
  lowercaseString = this.str1str2.toLowerCase();

  displayBananas = "I can eat bananas all day";
  bananasSlice = this.displayBananas.slice(10, 17);

  constructor() { }

  ngOnInit(): void {

  }

}
