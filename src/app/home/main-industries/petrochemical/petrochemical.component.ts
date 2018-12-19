import { Component, OnInit } from "@angular/core";
import { TextModel } from "../../../models/body.text.model";

@Component({
  selector: "app-petrochemical",
  templateUrl: "./petrochemical.component.html",
  styleUrls: ["./petrochemical.component.scss"]
})
export class PetrochemicalComponent implements OnInit {
  bg = "exx.png";
  list = [];
  paragraphs = [
    `Vacuum pumps and compressors are used in many applications in the chemical industries.
Technologies used are dry running and oil lubricated rotary vanes, liquid ring and rotary screw
pumps as well as ejectors. Engineered systems designed and built for our demanding customers
assure safe and reliable operation.`,

    `Compressed air can also be found in numerous uses in this industry. Both oil lubricated and oil
free compressors deliver a safe and reliable form of energy that can be used on both sensitive
products and in hazardous environments. Another product range is available for the safe transfer
of chemical and petrochemical liquids in bulk at both standard and high pressure.`
  ];
  heading = "Petrochemical";
  multiList: Array<TextModel> = [
    {
      heading: `Air curtains`,
      paragraphs: [
        `Compressed air is used as a curtain to create a safe and clean area.
`
      ]
    },
    {
      heading: `Control valves and cylinders`,
      paragraphs: [
        `Compressed air is used for operating printing pumps and equipment. As air is non explosive, it is safe
and reliable`
      ]
    },
    {
      heading: `Gas Compression`,
      paragraphs: [
        `Gases must be compressed before they can be pumped through pipelines for further use. In many cases
this compression is also necessary in order to reduce the volume of storage space required.`
      ]
    },
    {
      heading: `Material handling`,
      paragraphs: [
        `Compressed air operated fluid pumping systems are used in volatile environments without the risk of
explosion.`
      ]
    },
    {
      heading: `Nitrogen generation`,
      paragraphs: [
        `Compressed air is filtered via a membrane to produce nitrogen used in a variety of chemical
applications.`
      ]
    },
 
    {
      heading: "Pneumatic Conveying",
      paragraphs: [
        `Chemicals can be conveyed safely and economically with stand-alone compressors or vacuum pumps
        and central systems. Dust free and therefore loss-free conveying, simple design of the piping and no
        deformation of the conveyed material are assured.`
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
