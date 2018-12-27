import { Component, OnInit } from "@angular/core";
import { TextModel } from "../../../models/body.text.model";

@Component({
  selector: "app-power",
  templateUrl: "./power.component.html",
  styleUrls: ["./power.component.scss"]
})
export class PowerComponent implements OnInit {
  bg = "power.png";
  list = [];
  paragraphs = [
    `There is a need for compressed air throughout power generation sites and plants and The Titan Emporium provide compressed air for –`,
    ` -Air tools`,
    ` -Instrument air`,
    ` -Pneumatic instrumentation`,

    `Part of The Titan Emporium, provides specialist safety value expertise to 
    the power industry, we are well placed to understand the requirements
     of this sector. The implications of unplanned shut downs or stoppages 
     are massive and we can work to the demanding deadlines and service 
     levels demanded by the power industry.`
  ];
  heading = "Power Generation";
  multiList: Array<TextModel> = [];
  constructor() {}

  ngOnInit() {}
}
