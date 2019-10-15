import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRouterModule } from './router.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavBarBettaComponent } from './shared/nav-bar-betta/nav-bar-betta.component';
import { NavMobileComponent } from './shared/nav-mobile/nav-mobile.component';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
   declarations: [
      AppComponent,
      NavMobileComponent,
      NavBarBettaComponent
   ],
   imports: [
      BrowserModule,
      AppRouterModule,
      SharedModule,
      HttpClientModule,
      AccordionModule,
      BrowserAnimationsModule
   ],
   providers:[HttpClient]
   ,
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
