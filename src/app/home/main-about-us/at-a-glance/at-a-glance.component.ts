import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-a-glance',
  templateUrl: './at-a-glance.component.html',
  styleUrls: ['./at-a-glance.component.scss']
})
export class AtAGlanceComponent implements OnInit {
  paragraph =  `
The Titan Emporium is a distributor of leading global brands with head offices in Johannesburg 
(South Africa) providing integrated product solutions, rental, long term leasing, and product support. 
The company was established in 2012 in South Africa, A unique entrepreneurial 100% black-owned and 
black-controlled industrial supplies, solutions and Investment Company.
`;

heading = `The Titan Emporium at a Glance`;
  constructor() { }

  ngOnInit() {
  }

}
