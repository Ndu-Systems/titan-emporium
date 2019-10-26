import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRouterModule } from './router.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavBarBettaComponent } from './shared/nav-bar-betta/nav-bar-betta.component';
import {AccordionModule} from 'primeng/accordion';
import { FormsModule } from '@angular/forms';
import { FiltermenuPipe } from './shared/pipes/filtermenu.pipe';

@NgModule({
   declarations: [
      AppComponent,
      NavBarBettaComponent,
      FiltermenuPipe

   ],
   imports: [
      BrowserModule,
      AppRouterModule,
      SharedModule,
      HttpClientModule,
      AccordionModule,
      BrowserAnimationsModule,
      FormsModule
   ],
   providers:[HttpClient]
   ,
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
