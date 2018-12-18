import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marine',
  templateUrl: './marine.component.html',
  styleUrls: ['./marine.component.scss']
})
export class MarineComponent implements OnInit {
  bg="";
  list=[];
  paragraphs;
  heading;
  constructor() { }

  ngOnInit() {
  }

}
