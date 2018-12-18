import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industrial',
  templateUrl: './industrial.component.html',
  styleUrls: ['./industrial.component.scss']
})
export class IndustrialComponent implements OnInit {
  bg="";
  list=[];
  paragraphs;
  heading;
  constructor() { }

  ngOnInit() {
  }

}
