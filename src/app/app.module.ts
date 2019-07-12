import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './router.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavBarBettaComponent } from './shared/nav-bar-betta/nav-bar-betta.component';

@NgModule({
   declarations: [
      AppComponent,
      NavBarBettaComponent
   ],
   imports: [
      BrowserModule,
      AppRouterModule,
      SharedModule,
      HttpClientModule
   ],
   providers:[HttpClient]
   ,
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
