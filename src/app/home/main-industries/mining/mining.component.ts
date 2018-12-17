import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.scss']
})
export class MiningComponent implements OnInit {
  heading='Mining Industry';

  paragraphs=[
  `Compressed air and gases are used both during the obtaining of raw materials and in exploration,
 extraction and treatment processes.`,
 
 `Difficult ambient conditions (dust, heat, cold, moisture and long supply routes) mean the
 machines used meet the most exacting demands.`,
 
 `Faced with these extremely challenging requirements, the robust and high-quality compressor
 solutions by The Titan Emporium stand out because of the strengths for which our products have
 become known.`]
  constructor() { }

  ngOnInit() {
  }

}
