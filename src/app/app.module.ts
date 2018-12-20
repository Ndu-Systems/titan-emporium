import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './router.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent
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
