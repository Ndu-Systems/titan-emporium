import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes, declarations } from './home.routing';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  imports: [
    CommonModule,HomeRoutes,SharedModule
  ],
  declarations: [...declarations]
})
export class HomeModule { }
