import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-strategy',
  templateUrl: './our-strategy.component.html',
  styleUrls: ['./our-strategy.component.scss']
})
export class OurStrategyComponent implements OnInit {
  paragraphs =[
    `Focus on mining, industrial, Petrochemical, oil and gas, real estate and HealthCare and Rail.`,
`Grow capacity to secure and deliver large multidisciplinary contracts`,
`Extract value throughout the infrastructure value chain`,
`Develop, invest in and operate concessions and property assets`,
`Expansionary geographic strategy`,
`Driving internal efficiencies`

  ];
   heading = 'Our Strategy';
   bg="strategy.jpg";
  constructor() { }

  ngOnInit() {
  }

}
