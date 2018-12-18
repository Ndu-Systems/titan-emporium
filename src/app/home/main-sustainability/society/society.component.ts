import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.scss']
})
export class SocietyComponent implements OnInit {


  heading = `Society`;

  paragraphs = [`The Titan Emporium strives to be responsive to the needs of the communities in which it does
  business. Corporate Social Investment is viewed as an investment in the future, in the group’s
  people their various communities, and in the environmental sustainability of the planet.`,
  
  `The aim to address the key causes of social challenges such as underdevelopment, hunger,
  poverty and limited economic participation. Through its partnerships, the Group is involved in
  various community projects in education, environment and food security.`,
  
  `We are committed to allocating a minimum of 1% of our net profits after tax to CSI, a long-term
  approach which we believe represents international best practice on the part of companies which
  manage their businesses and their externalities, such as their impacts on the environment, in an
  ethical and responsible manner.`
  ]
  bg="";
  list=[];

  constructor() { }

  ngOnInit() {
  }

}
