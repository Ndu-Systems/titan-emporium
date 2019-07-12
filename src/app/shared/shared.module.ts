import { ServicesLayoutComponent } from "./services-layout/services-layout.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedComponent } from "./shared.component";
import { RouterModule } from "@angular/router";
import { PagesLayoutComponent } from "./pages-layout/pages-layout.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    SharedComponent,
    PagesLayoutComponent,
    ServicesLayoutComponent,
  ],
  exports: [
    SharedComponent,
    PagesLayoutComponent,
    ServicesLayoutComponent
  ]
})
export class SharedModule {}
