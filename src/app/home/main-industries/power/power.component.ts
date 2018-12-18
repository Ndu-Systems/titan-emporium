import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent implements OnInit {
  bg="";
  list=[];
  paragraphs;
  heading;
  constructor() { }

  ngOnInit() {
  }

}
