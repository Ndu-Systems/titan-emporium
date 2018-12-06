import { AtAGlanceComponent } from "./main-about-us/at-a-glance/at-a-glance.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { OurStrategyComponent } from "./main-about-us/our-strategy/our-strategy.component";
import { OurApproachComponent } from "./main-about-us/our-approach/our-approach.component";
import { OurVisionComponent } from "./main-about-us/our-vision/our-vision.component";
import { OurValuesComponent } from "./main-about-us/our-values/our-values.component";

export const declarations: any[] = [
  ContactUsComponent,
  HomeComponent,
  AtAGlanceComponent,
  OurStrategyComponent,
  OurApproachComponent,
  OurVisionComponent,
  OurValuesComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutes {}
