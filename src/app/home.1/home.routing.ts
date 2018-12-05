import { AtAGlanceComponent } from './main-about-us/at-a-glance/at-a-glance.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

export const declarations: any[] = [ContactUsComponent, HomeComponent,AtAGlanceComponent];

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutes {}
