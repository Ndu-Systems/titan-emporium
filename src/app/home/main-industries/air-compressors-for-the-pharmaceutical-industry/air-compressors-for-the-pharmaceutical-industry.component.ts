import { Component, OnInit } from "@angular/core";
import { TextModel } from "src/app/models/body.text.model";

@Component({
  selector: "app-air-compressors-for-the-pharmaceutical-industry",
  templateUrl:
    "./air-compressors-for-the-pharmaceutical-industry.component.html",
  styleUrls: [
    "./air-compressors-for-the-pharmaceutical-industry.component.scss"
  ]
})
export class AirCompressorsForThePharmaceuticalIndustryComponent
  implements OnInit {
  bg = "air-comp-for.png";
  list = [];
  paragraphs = [
    `The Pharmaceutical industry normally has quite specialist requirements for compressed air.
    Typically these requirements are extremely clean, dry air free from contaminants and often
    guaranteed oil free. There are a number of ways to achieve this level of cleanliness, ranging from
    oil free compressors with desiccant dryers to lubricated compressors with oil removing
    downstream filtration. Talk to us to discuss your exact requirements.`,
    `Pharmaceutical manufacturing sites and labs are often large with a varied requirement of
    compressed air, specialist gases and vacuum in various parts of the factory.  The Titan
    Emporium has the experience needed to maintain and develop these complex pipework systems.`,
    `Pharmaceutical sites typically require large oil free compressors with desiccant dryers for
    guaranteed oil free air and then need a large pipework distribution system.`,
    `It is sometimes more appropriate to have several small stand alone, low noise, oil free units
    positioned in individual labs for a more flexible solution.`,
    `There are always alternatives available, some of these can be more reliable, lower cost to install
    or lower cost to operate. If you are looking at a compressed air system for a pharmaceutical
    application please contact us so we can discuss further.`
  ];
  heading = "Air Compressors for the Pharmaceutical Industry";
  multiList: Array<TextModel> = [];
  constructor() {}

  ngOnInit() {}
}
