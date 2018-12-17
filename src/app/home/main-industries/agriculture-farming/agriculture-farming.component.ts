import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agriculture-farming',
  templateUrl: './agriculture-farming.component.html',
  styleUrls: ['./agriculture-farming.component.scss']
})
export class AgricultureFarmingComponent implements OnInit {
  heading = 'agriculture and farming';
  paragraphs = [
  `For more than 10,000 years, humanity has cultivated the land, bred livestock and harvested what
nature provided in order to feed themselves, allowing our ancestors to abandon a nomadic way of
life.`,`

Today, agriculture is still a vital part of human existence, and has become far more advanced
over centuries. Much that was once done by hand, or required tools powered by human energy,
has been replaced by sophisticated machines, providing higher yields and improving the way
crops are harvested for higher efficiency.`,`

The Titan Emporium provides reliable air compressors for farming operations of all types and sizes.
We’re your source for a reciprocating or rotary screw air compressor for agriculture business use, and
we can also provide dependable portable air compressors for agriculture business field operations.
The Titan Range can be utilized in a variety of applications. When considering your application,
also consider if the compressor installation can be stationary, or if a portable option may be more
advantageous in certain situations.`
];
bg ="";
  constructor() { }

  ngOnInit() {
  }

}
