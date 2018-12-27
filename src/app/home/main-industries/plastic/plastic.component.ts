import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plastic',
  templateUrl: './plastic.component.html',
  styleUrls: ['./plastic.component.scss']
})
export class PlasticComponent implements OnInit {
  heading=   'Plastics';
     paragraphs = [
     `The plastics industry is booming, with no sign of letting up soon. To put the power of plastics into
     perspective, consider these statistics from the `]
     bg="PLASTIC.png";
     list=[];
     showLink = true;
  constructor() { }

  ngOnInit() {
  }

}
