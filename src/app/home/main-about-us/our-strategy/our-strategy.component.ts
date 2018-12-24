import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-strategy',
  templateUrl: './our-strategy.component.html',
  styleUrls: ['./our-strategy.component.scss']
})
export class OurStrategyComponent implements OnInit {
  paragraphs =[
    `-Focus on mining, industrial, Petrochemical, oil and gas, real estate, Healthcare and Rail.`,
    
    `-Grow capacity to secure and deliver on exceptional service`,
    
    `-Extract value throughout the industrial value chain`,
    
    `-Develop, invest in and  grow leading International Brands as well as  operate concessions and property assets`,
    
    `-Geographically expand in key markets`,
    
    `-Driving internal efficiencies`,
    
    `-Grow with our customers`

  ];
   heading = 'Our Strategy';
   bg="hores.svg";
  constructor() { }

  ngOnInit() {
  }

}
