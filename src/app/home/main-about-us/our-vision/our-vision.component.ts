import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-vision',
  templateUrl: './our-vision.component.html',
  styleUrls: ['./our-vision.component.scss']
})
export class OurVisionComponent implements OnInit {
  paragraphs = [`Comming soon`]
  heading ="Our Vision"
  bg="mission-and-vision-png-3.png";

  constructor() { }

  ngOnInit() {
  }

}
