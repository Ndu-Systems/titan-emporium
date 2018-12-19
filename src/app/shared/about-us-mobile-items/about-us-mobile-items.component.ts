import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about-us-mobile-items',
  templateUrl: './about-us-mobile-items.component.html',
  styleUrls: ['./about-us-mobile-items.component.scss']
})
export class AboutUsMobileItemsComponent implements OnInit {
  @Output() closeNav: EventEmitter<boolean>= new EventEmitter();
  @Output() closePopup: EventEmitter<boolean>= new EventEmitter();
  hide(){
    this.closeNav.emit(false);
  }
  hidePopup(){
    this.closePopup.emit(false);
  }
  constructor() { }

  ngOnInit() {
  }
 

}
