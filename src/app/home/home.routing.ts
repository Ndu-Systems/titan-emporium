import { SustainabilityIntroComponent } from './main-sustainability/sustainability-intro/sustainability-intro.component';
import { PipeJackingComponent } from './main-services/pipe-jacking/pipe-jacking.component';
import { CompressedAirPipeworkComponent } from './main-services/compressed-air-pipework/compressed-air-pipework.component';
import { AssetLeasingComponent } from './main-services/asset-leasing/asset-leasing.component';
import { CompressorRepairAndServiceComponent } from './main-services/compressor-repair-and-service/compressor-repair-and-service.component';
import { AirCompressorHireComponent } from './main-services/air-compressor-hire/air-compressor-hire.component';
import { AtAGlanceComponent } from "./main-about-us/at-a-glance/at-a-glance.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { OurStrategyComponent } from "./main-about-us/our-strategy/our-strategy.component";
import { OurApproachComponent } from "./main-about-us/our-approach/our-approach.component";
import { OurVisionComponent } from "./main-about-us/our-vision/our-vision.component";
import { OurValuesComponent } from "./main-about-us/our-values/our-values.component";
import { ServiceAgreementsComponent } from './main-services/service-agreements/service-agreements.component';
import { SupplyAndInstallationComponent } from './main-services/supply-and-installation/supply-and-installation.component';
import { DirectionalDrillingComponent } from './main-services/directional-drilling/directional-drilling.component';

export const declarations: any[] = [
  ContactUsComponent,
  HomeComponent,
  AtAGlanceComponent,
  OurStrategyComponent,
  OurApproachComponent,
  OurVisionComponent,
  OurValuesComponent,
  AirCompressorHireComponent ,
  CompressorRepairAndServiceComponent,
  AssetLeasingComponent ,
  CompressedAirPipeworkComponent,
  ServiceAgreementsComponent,
  SupplyAndInstallationComponent,
  DirectionalDrillingComponent,
  PipeJackingComponent,
  SustainabilityIntroComponent

  
];

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contact-us",
    component: ContactUsComponent
  },
  {
    path: "at-a-glance",
    component: AtAGlanceComponent
  },
  {
    path: "our-strategy",
    component: OurStrategyComponent
  },
  {
    path: "our-approach",
    component: OurApproachComponent
  },
  {
    path: "our-vision",
    component: OurVisionComponent
  },
  {
    path: "our-values",
    component: OurValuesComponent
  },
  {
    path: "air-compressor-hire",
    component: AirCompressorHireComponent
  },
  {
    path: "compressor-repair-and-service",
    component: CompressorRepairAndServiceComponent
  },
  {
    path: "asset-leasing",
    component: AssetLeasingComponent
  },
  {
    path: "compressed-air-pipework",
    component: CompressedAirPipeworkComponent
  },
  {
    path: "service-agreements",
    component: ServiceAgreementsComponent
  },
  {
    path: "supply-and-installation",
    component: SupplyAndInstallationComponent
  },
  {
    path: "directional-drilling",
    component: DirectionalDrillingComponent
  },
  {
    path: "pipe-jacking",
    component: PipeJackingComponent
  },
  {
    path: "sustainability-intro",
    component: SustainabilityIntroComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutes {}
