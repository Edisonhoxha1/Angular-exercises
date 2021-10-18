import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment-btn',
  templateUrl: './increment-btn.component.html',
  styleUrls: ['./increment-btn.component.css']
})
export class IncrementBtnComponent implements OnInit {

  counter = 0;

  counterArray : number[] = [];

  stringArray = [2, 3, 54, 55, 2];

  shuma = 0;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.stringArray.filter(x => x < 10));
    this.stringArray.forEach(el => this.shuma += el);
    // console.log(this.shuma);
    // console.log(this.stringArray.some(el => el === 10));
  }

  incrementButton(){
    this.counter ++;
    this.counterArray.push(this.counter);
    // console.log(this.counterArray);
    // console.log(this.counterArray.filter(value => value === 4));
  }

  discrementButton() {
    this.counter --;
    this.counterArray.push(this.counter);
    // console.log(this.counterArray);
  }

}
