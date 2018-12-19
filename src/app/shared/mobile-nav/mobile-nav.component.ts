import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-mobile-nav",
  templateUrl: "./mobile-nav.component.html",
  styleUrls: ["./mobile-nav.component.scss"]
})
export class MobileNavComponent implements OnInit {
  @Output() closeNavEmitter: EventEmitter<boolean> = new EventEmitter();
  showPopup;
  showAbout: boolean;
  showServices;
  showIndustries;
  showSustainability;
  constructor() {}

  ngOnInit() {}
  changeShowAbout() {
    this.showPopup = true;
    this.showAbout = true;
  }
  changeShowServices() {
    this.showPopup = true;
    this.showServices = true;
  }
  changeShowIndustries() {
    this.showPopup = true;
    this.showIndustries = true;
  }
  changeShowSustainability() {
    this.showPopup = true;
    this.showSustainability = true;
  }
  closePop(){
    this.showPopup=false;
    this.showAbout=false;
    this.showServices=false;
    this.showIndustries=false;
    this.showSustainability=false;
  }
  hide() {
    this.closeNavEmitter.emit(false);
  }
  close(event: boolean) {
    this.closeNavEmitter.emit(event);
  }
}
