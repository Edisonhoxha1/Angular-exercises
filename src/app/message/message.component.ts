import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnChanges {

  @Input() childMessage='';

  show: boolean = true;
  array = [
    'test',
    'test1'
  ]

  // inputValue = "test";
  placeholder = "write";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(change:SimpleChanges) {
    // console.log(change);
  }
}
