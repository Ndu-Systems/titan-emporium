import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directional-drilling",
  templateUrl: "./directional-drilling.component.html",
  styleUrls: ["./directional-drilling.component.scss"]
})
export class DirectionalDrillingComponent implements OnInit {
  paragraphs = [
    `Horizontal Directional Drilling is a unique and
     powerful service for clients looking to install pipelines, 
     cables or sewers across any major obstacle that would otherwise be impossible to cross by conventional means. 
    A directional drilling rig drills horizontally at a given depth beneath the obstacle.`,

    `Titan Emporium team members have installed nearly 20 kilometres
    worth of pipe, cable and fibre across obstacles like
    major rivers, highways, roads and developments.
    Most notably, we have done major gas pipeline
    installations for Egoli gas and Sasol across 
    roadways like Main Reef Road, highways like the N1 and Rivers like the Jukskei river.`,


    `Our crew has a combined 30 years’ experience in the trenchless pipeline installation and employ the highest quality standards when delivering a fully installed pipeline or cable route.

    `
  ];
  heading = "Horizontal Directional Drilling";
  bg = "";

  constructor() {}

  ngOnInit() {}
}
