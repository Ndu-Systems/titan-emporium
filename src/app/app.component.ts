import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app-titan";
  showMobleMenu: boolean ;
  toggleMenu() {
    this.showMobleMenu = !this.showMobleMenu;
  }
  onCloseNav(b: boolean) {
    this.showMobleMenu = b;
  }
}
