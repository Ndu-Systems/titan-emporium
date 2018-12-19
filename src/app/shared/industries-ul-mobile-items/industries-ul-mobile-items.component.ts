import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-industries-ul-mobile-items',
  templateUrl: './industries-ul-mobile-items.component.html',
  styleUrls: ['./industries-ul-mobile-items.component.scss']
})
export class IndustriesUlMobileItemsComponent implements OnInit {
  @Output() closeNav: EventEmitter<boolean>= new EventEmitter();
  hide(){
    this.closeNav.emit(false);
  }
  constructor() { }

  ngOnInit() {
  }

}
