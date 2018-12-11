import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-compressed-air-pipework",
  templateUrl: "./compressed-air-pipework.component.html",
  styleUrls: ["./compressed-air-pipework.component.scss"]
})
export class CompressedAirPipeworkComponent implements OnInit {
  paragraphs = [
    `Our specialist piping engineers design and install distribution pipework for compressed air
  systems as well as water, vacuum, and other fluids. Our compressed air distribution
  systems can be constructed in either traditional galvanised steel or highly efficient smooth
  bore, aluminium pipeline system.`,
    `The majority of our pipework installations today are carried out using our EQO aluminium
  piping system. Customers benefit twofold from this. EQO pipework system is smooth bore and
  offers much improved flow characteristics over traditional galvanized pipework. The improved
  flow provides energy savings which translate to cost savings and improved Carbon Footprint.
  Additionally EQO aluminium does not corrode internally as iron pipe does therefore retaining it&#39;s
  better flow characteristics. Secondly the system is push to fit assembly and hence provides
  installation cost savings whether carried out by us our the customer.`,
  `Our pipe fitters are fully trained in compressed air pipework systems and all installations are in
  accordance with Compressed Air Society guidelines and recommendations to ensure maximum
  performance and reliability from your compressed air distribution system.`
  ];
  heading = "Compressed Air Pipework";
  bg = "";

  constructor() {}

  ngOnInit() {}
}
