import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-leasing',
  templateUrl: './asset-leasing.component.html',
  styleUrls: ['./asset-leasing.component.scss']
})
export class AssetLeasingComponent implements OnInit {

  paragraphs=[`At The Titan Emporium (Pty) Ltd we offer “pay-per-use” leasing solutions to companies and
  institutions alike to help you finance the purchase of the brand new equipment that you need.
  Unlike conventional financing, we offer subsidised finance. That means that you only pay for a
  portion of the equipment for the duration that you use it.`,
  `E.g. Where equipment cost R10 000, InnoVent could invest a 15% residual and you pay only R8 500 in present
  value terms to use the equipment for an agreed term.`,
  `Our rates are below traditional financing options and we offer repayments for up to 60 months,
  matching the useful life of the equipment with the relevant rental period.
  We specialize in rapidly depreciating assets that are typically depreciated over a period of 5
  years or less and lose value, in real terms and over a similar period.`
];
  heading ="Asset Leasing"
  bg="";
  
  constructor() { }

  ngOnInit() {
  }

}
