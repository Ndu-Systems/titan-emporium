import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-jacking',
  templateUrl: './pipe-jacking.component.html',
  styleUrls: ['./pipe-jacking.component.scss']
})
export class PipeJackingComponent implements OnInit {
  paragraphs=[`Comming soon...`,`Comming soon...`
];
  heading ="Comming..."
  bg="";
  
  constructor() { }

  ngOnInit() {
  }

}
