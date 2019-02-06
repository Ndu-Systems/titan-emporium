import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-compressor-hire',
  templateUrl: './air-compressor-hire.component.html',
  styleUrls: ['./air-compressor-hire.component.scss']
})
export class AirCompressorHireComponent implements OnInit {
  paragraphs=[`Air Compressor hire is a great way to meet short term increased air demand. Many of our
  customers find they have a short term increased air demand when they are testing new equipment
  or they have one off large contracts. If your air demand is subject to change it is always worth
  considering short term compressor hire.`,
`At The Titan Emporium we have a fleet of rental compressors, available for immediate hire. We
offer electric or diesel powered compressors on a short term or extended basis. Our hire fleet
includes compressors ranging from 2 to 30KW.`,
`We are normally able to get an electric or diesel air compressor to you within a day or so.
Making hire the quickest way to get your plant up and running should you have a major
compressor breakdown. Talk to us if you have any questions`
];
  heading ="Air Compressor Hire"
  bg="air-compressor-hire.png";
  constructor() { }

  ngOnInit() {
  }
}
