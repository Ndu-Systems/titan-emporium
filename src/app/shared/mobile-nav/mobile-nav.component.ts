import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {
  @Output() closeNavEmitter:EventEmitter<boolean> =new EventEmitter(); 
  sustainability;
  showAbout;
  showServices;
  showIndustries;
  showSustainability;
  constructor() { }

  ngOnInit() {
  }
  hide(){
    this.closeNavEmitter.emit(false); 
  }
  close(event:boolean){
    this.closeNavEmitter.emit(event); 

  }
}
