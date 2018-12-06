import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.scss']
})
export class OurValuesComponent implements OnInit {
  paragraphs = []
  heading ="Our Values"
  constructor() { }

  ngOnInit() {
  }

}
