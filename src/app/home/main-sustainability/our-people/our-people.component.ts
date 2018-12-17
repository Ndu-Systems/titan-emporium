import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-people',
  templateUrl: './our-people.component.html',
  styleUrls: ['./our-people.component.scss']
})
export class OurPeopleComponent implements OnInit {

  heading = `Our People`;

  paragraphs = [`The Titan Emporium’s key asset is the capacities and skills of its employees. Employees are central
  to the implementation and success of our vision and strategy. We aspire to creating an
  organisation of the future where we deliver employee value by engaging the hearts and minds
  of all employees so that they come to work with a sense of purpose and leave with a sense of
  Accomplishment`,
  
  `Our people strategy supports the business model in delivering the Employee Value Proposition
  articulated in our people statement and strategic intent.`,
  
  `Our strategic intent is to build an organisation that adds value to employees as our success is based
  on inspired, aligned, empowered, results-driven, competitive, passionate people who create
  value through strategic innovation and continuous improvement`]
  constructor() { }

  ngOnInit() {
  }

}
