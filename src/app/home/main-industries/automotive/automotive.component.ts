import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automotive',
  templateUrl: './automotive.component.html',
  styleUrls: ['./automotive.component.scss']
})
export class AutomotiveComponent implements OnInit {
  paragraphs=[
    `Automotive technology has grown by leaps and bounds over the past 100 years, but one thing remains
    unchanged: Dozens of parts get passed along assemblies for the construction of each vehicle. Auto
    assembly is a job that requires teams of technicians who put together various components, both large
    and small. Throughout each stage of assembly, automotive air compressors dedicated to powering these
    processes deliver air to power to the most essential tools and operations along the production line.`,
    
    `Automobiles have traditionally been constructed of steel, though many component parts are now made
    of petroleum products like plastic, which have shaved significant amounts of weight off motor vehicles
    in recent decades. In any case, using pneumatic tools allows for the quick and easy assembly of car parts
    made from a variety of materials.`,
    
    `Discover how the right automotive air compressor from The Titan Emporium can help you meet the
    unique air compression requirements in your automotive operation. For product selection assistance
    and pricing information, contact us directly`
  ];
  heading ="Automotive Air Compressors";
  bg="auto.png";
  list=[];
;
  constructor() { }

  ngOnInit() {
  }

}
