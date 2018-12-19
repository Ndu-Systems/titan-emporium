import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-service-ul-mobile-items',
  templateUrl: './service-ul-mobile-items.component.html',
  styleUrls: ['./service-ul-mobile-items.component.scss']
})
export class ServiceUlMobileItemsComponent implements OnInit {
  @Output() closeNav: EventEmitter<boolean>= new EventEmitter();
  hide(){
    this.closeNav.emit(false);
  }
  constructor() { }

  ngOnInit() {
  }

}
