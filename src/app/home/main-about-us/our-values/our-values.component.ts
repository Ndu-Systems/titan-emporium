import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.scss']
})
export class OurValuesComponent implements OnInit {
  paragraphs = [`Our values are the core beliefs of our organization. They define our culture and determine the way we engage with our customers and other stake holders, create products and services, and grow our community. 
  Our values guide us in our everyday decisions and help to set a high standard of work ethics.`,
`Our team consistently lives by these values and strives to build an exceptional customer service experience`,
`Through Practical Leadership, Simple, Professional and Democratic practices, we have created a successful company culture 
that celebrates innovation, encourages agility and individual growth, and inspires success `
]
  heading ="Our Values"
  bg="our-values.png";

  constructor() { }

  ngOnInit() {
  }

}
