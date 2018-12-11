import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directional-drilling',
  templateUrl: './directional-drilling.component.html',
  styleUrls: ['./directional-drilling.component.scss']
})
export class DirectionalDrillingComponent implements OnInit {
  paragraphs=[`Comming soon...`,`Comming soon...`
];
  heading ="Comming..."
  bg="";
  
  constructor() { }

  ngOnInit() {
  }

}
