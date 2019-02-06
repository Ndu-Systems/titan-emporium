import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sustainability-intro',
  templateUrl: './sustainability-intro.component.html',
  styleUrls: ['./sustainability-intro.component.scss']
})
export class SustainabilityIntroComponent implements OnInit {
  heading= `The Titan Emporium and Sustainability`;
  paragraphs =[ `We believe in a focused and dedicated approach to sustainability. We believe in creating shared
  value for the communities in which we operate.`,
  
  `This concept spurs us on to evaluate the way our business uses, transforms, renews and creates
  resources. We exist to better the lives of South African families and empower our communities
  and its citizens and more importantly our youth.`,
  
  `We don’t advocate or pursue a narrow approach to value creation, rather we aim to do well by
  doing good. We believe our prosperity is tied to the progress of those around us. We are
  committed to a shared value approach, creating sustainable success.`
  ]
  bg="sustain.png";
  list=[];

  constructor() { }

  ngOnInit() {
  }

}
