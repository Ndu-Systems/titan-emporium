import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {
  @Output() closeNavEmitter:EventEmitter<boolean> =new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }
  hide(){
    this.closeNavEmitter.emit(false); 
  }
}
