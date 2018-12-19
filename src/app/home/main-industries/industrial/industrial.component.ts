import { Component, OnInit } from "@angular/core";
import { TextModel } from "../../../models/body.text.model";

@Component({
  selector: "app-industrial",
  templateUrl: "./industrial.component.html",
  styleUrls: ["./industrial.component.scss"]
})
export class IndustrialComponent implements OnInit {
  bg = "industrail.png";
  list = [];
  paragraphs = [
    `The manufacturing sector is probably the largest user of Industrial Air Compressors. Almost
every manufacturer or service facility will have demand for compressed air and so is very likely
to have an air compressor somewhere on site.`,
    `The Air Compressors will be used for a huge range of different applications within the industry,
this will include:`,
    ,
    `-Powering air tools`,
    `-Powering pneumatically controlled tools and services`,
    `-Paint and glue spraying`,
    `-Powering and controlling clamps and fixtures`,
    `-Pressure testing components`,
    `-Shielding electronics during soldering`,
    `-and a multitude of other things.`
  ];
  heading = "Industrial Air Compressors for the Manufacturing Sector";
  multiList: Array<TextModel> = [
    {
      heading: "Industrial air compressors FOR THE MANUFACTURING INDUSTRY",
      paragraphs: [
        `Although industrial air compressors are used for a very wide range of applications in
manufacturing the basic requirements fr each are normally very similar. These are:`
,`* Reliability – Air Compressors are critical to the manufacturing line so they must be reliable and often have backup to guarentee against breakdown`
,`* Durability – The Air Compressors are used single, double of even triple shift so they need to be durable and be designed to last`
,`* Consistency – They need to work consistently day in, day out regardless of weather environment or usage pattern`
,`* Cost effective – They need to produce the right amount of compressed air at the right pressure regardless of demand, at the lowest possible unit price`
,`* Quality – The produced compressed air needs to be of the right quality, consistently and reliably`
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
