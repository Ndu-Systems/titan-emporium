import { Component, OnInit } from '@angular/core';
import { TextModel } from '../../../models/body.text.model';

@Component({
  selector: 'app-woodworking',
  templateUrl: './woodworking.component.html',
  styleUrls: ['./woodworking.component.scss']
})
export class WoodworkingComponent implements OnInit {
  bg="wood.png";
  list=[];
  paragraphs=[
    `
    Air compressor and vacuum pump dependability, efficiency and energy savings are all key in every
    woodworking operation. OEMs, furniture manufacturers, millwork operations and a host of other wood
    product businesses recognize that compressed air and vacuum pumps must be cost effective to operate.`
  ];
  heading='Woodworking Industry';
  multiList: Array<TextModel> = [
    {
      heading:'Solution',
      paragraphs:[
        `Dependability- Through quality engineering and rigorous manufacturing, our supplier’s makes equipment
that is reliable whether it is operating industrial rotors and saws or powering spraying equipment for a
refinishing shop.`,

`Stable Air Pressures- No other compressors delivers more consistent air pressure or more efficient low-
pressure air for open blowing than The Titan option range of compressor.`,

`Energy Savings- Through the application of its patented EQ/ Efficiency Quotient, The Titan can quickly
and accurately define the potential energy savings a substantial woodworking operation can expect to
capture by bringing its facility more into line with Best Practices.`
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
