import { PcNavComponent } from './pc-nav/pc-nav.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { PagesLayoutComponent } from './pages-layout/pages-layout.component';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [SharedComponent,MobileNavComponent,PcNavComponent,NavComponent,PagesLayoutComponent],
  exports:[SharedComponent,MobileNavComponent,PcNavComponent,NavComponent,PagesLayoutComponent]
})
export class SharedModule { }
