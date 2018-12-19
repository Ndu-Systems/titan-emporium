import { AboutUsMobileItemsComponent } from './about-us-mobile-items/about-us-mobile-items.component';
import { ServicesLayoutComponent } from "./services-layout/services-layout.component";
import { PcNavComponent } from "./pc-nav/pc-nav.component";
import { MobileNavComponent } from "./mobile-nav/mobile-nav.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedComponent } from "./shared.component";
import { NavComponent } from "./nav/nav.component";
import { RouterModule } from "@angular/router";
import { PagesLayoutComponent } from "./pages-layout/pages-layout.component";
import { IndustriesUlMobileItemsComponent } from './industries-ul-mobile-items/industries-ul-mobile-items.component';
import { ServiceUlMobileItemsComponent } from './service-ul-mobile-items/service-ul-mobile-items.component';
import { SustainabilityServiceUlMobileItemsComponent } from './sustainability-service-ul-mobile-items/sustainability-service-ul-mobile-items.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    SharedComponent,
    MobileNavComponent,
    PcNavComponent,
    NavComponent,
    PagesLayoutComponent,
    ServicesLayoutComponent,
    AboutUsMobileItemsComponent,
    IndustriesUlMobileItemsComponent,
    ServiceUlMobileItemsComponent,
    SustainabilityServiceUlMobileItemsComponent
    
  ],
  exports: [
    SharedComponent,
    MobileNavComponent,
    PcNavComponent,
    NavComponent,
    PagesLayoutComponent,
    ServicesLayoutComponent,
    AboutUsMobileItemsComponent,
    IndustriesUlMobileItemsComponent,
    ServiceUlMobileItemsComponent,
    SustainabilityServiceUlMobileItemsComponent
  ]
})
export class SharedModule {}
