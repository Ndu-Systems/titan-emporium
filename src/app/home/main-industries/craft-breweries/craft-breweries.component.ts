import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-craft-breweries',
  templateUrl: './craft-breweries.component.html',
  styleUrls: ['./craft-breweries.component.scss']
})
export class CraftBreweriesComponent implements OnInit {
  heading='Craft Breweries need high quality Compressed air';

  paragraphs = [
  `The Titan Emporium have been working with independent and craft breweries for several years.
  We have the knowledge and experience to guide you through the process of specification,
  selection and installation of your craft brewery compressed air system.`,
  `If you are using keg washers, bottling or canning lines, or just aeration of the wort in your
  brewing process, then you will be using compressed air.
  The Titan Emporium specialises in providing clean dry oil free or food grade compressed air for
  many food and beverage production facilities and would be happy to speak to you about your
  requirements.`,
  `Compressed air that comes into direct contact with the final product should meet high quality
  health standards. There are various routes to meet these guidelines using a high quality dryer and
  filtration or alternatively using oil free machines is a good start. Using food grade lubricants in
  the compressor to limit any contamination risk should there be a failure of the filtration systems
  in the compressed air system.`
  ];
  bg="BREW.png";
  list=[];

  constructor() { }

  ngOnInit() {
  }

}
