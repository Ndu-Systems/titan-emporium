import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sustainability-service-ul-mobile-items',
  templateUrl: './sustainability-service-ul-mobile-items.component.html',
  styleUrls: ['./sustainability-service-ul-mobile-items.component.scss']
})
export class SustainabilityServiceUlMobileItemsComponent implements OnInit {
  @Output() closeNav: EventEmitter<boolean>= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
hide(){
  this.closeNav.emit(false);
}
}
