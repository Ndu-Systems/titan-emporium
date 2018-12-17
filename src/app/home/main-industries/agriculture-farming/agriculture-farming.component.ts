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
bg ="cow.svg";
list = [
  `Water Pumps – Water is essential to crops, livestock and sustainable pastures.
  Sometimes compressed air is needed to bring this vital resource to specific areas to
  optimize growth. By ensuring less downtime and longevity with your compressor, you
  ensure your livestock and crops have this essential ingredient for life.`
  ,
  `Crop Sprayers – Many crop sprayers utilize compressed air, and a reliable compressor is
  essential in the daily operations of your farm. These types of automated crop sprayers
  require a large amount of air.`,
  `Product Conveyors/Pneumatic Material Handling Machines – Many product
  conveyors utilize compressed air. Quincy compressors are designed for both intermittent
  and continuous use. Pneumatic material handling machines are common in the food
  industry and require a steady supply of compressed air to function properly.`,
  `Dairy Machines – Like many automated agricultural machines that utilize a large
  amount of compressed air, dairy machines are essential. Quincy compressors are
  designed to handle the continuous and demanding requirements for farms of all sizes.
  Energy efficiency, in addition to reliability, is essential when selecting a compressor
  utilized in the dairy industry.`,
  `Tractors and Vehicle Tires- One of the most common uses of an air compressor on a
  farm is to inflate tractor and other vehicle tires on your farm. Whether you need to inflate
  your ATV tires quickly for the transport of hay to livestock over a large piece of land, or
  have a large tractor tire that needs inflated, a portable air compressor can be a vital
  component to your farm. Compressors make this task easy, and will help maintain safety
  and reliability on your farm equipment. Truck-mount options are also available.`,
  `Greenhouse Ventilation – For some growers, getting clean air and proper ventilation to
  industrial greenhouses can be a challenge solved with compressed air. For long-term use,
  
  energy efficiency is needed to maximize the economic benefits of utilizing compressed
  air for ventilation. Quincy compressors are built for the challenge, and will last for years.`,
  `Silos – Compressors can be use to power systems that transport excess grain and food
  into silos for storage.`,
  `Winterization of Irrigation Lines – Sometimes the harsh winter weather can impede
  irrigation lines. Farmers can utilize compressed air to clear irrigation lines of excess
  water in order to prepare for winter. Not only does it save on costly repairs, it can also be
  used to protect and add longevity to vital infrastructure that will last for years to come.`
];
  constructor() { }

  ngOnInit() {
  }

}
