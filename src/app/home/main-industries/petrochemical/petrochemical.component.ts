import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petrochemical',
  templateUrl: './petrochemical.component.html',
  styleUrls: ['./petrochemical.component.scss']
})
export class PetrochemicalComponent implements OnInit {
  bg="";
  list=[];
  paragraphs;
  heading;
  constructor() { }

  ngOnInit() {
  }

}
