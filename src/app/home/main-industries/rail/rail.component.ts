import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rail',
  templateUrl: './rail.component.html',
  styleUrls: ['./rail.component.scss']
})
export class RailComponent implements OnInit {
  bg="";
  list=[];
  paragraphs;
  heading;
  constructor() { }

  ngOnInit() {
  }

}
