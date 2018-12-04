import { PcNavComponent } from './pc-nav/pc-nav.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent,MobileNavComponent,PcNavComponent,NavComponent],
  exports:[SharedComponent,MobileNavComponent,PcNavComponent,NavComponent]
})
export class SharedModule { }
