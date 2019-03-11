import { ShopNowComponent } from './../shared/shop-now/shop-now.component';
import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HomeRoutes, declarations } from "./home.routing";
import { AgricultureFarmingComponent } from "./main-industries/agriculture-farming/agriculture-farming.component";
import { AutomotiveComponent } from "./main-industries/automotive/automotive.component";
import { ChemicalComponent } from "./main-industries/chemical/chemical.component";
import { CraftBreweriesComponent } from "./main-industries/craft-breweries/craft-breweries.component";
import { DefenceComponent } from "./main-industries/defence/defence.component";
import { FoodBeverageComponent } from "./main-industries/food-beverage/food-beverage.component";
import { IndustrialComponent } from "./main-industries/industrial/industrial.component";
import { MarineComponent } from "./main-industries/marine/marine.component";
import { MedicalPharmaceuticalAndDentalComponent } from "./main-industries/medical-pharmaceutical-and-dental/medical-pharmaceutical-and-dental.component";
import { MiningComponent } from "./main-industries/mining/mining.component";
import { NaturalGasComponent } from "./main-industries/natural-gas/natural-gas.component";
import { OilAndGasComponent } from "./main-industries/oil-and-gas/oil-and-gas.component";
import { PetrochemicalComponent } from "./main-industries/petrochemical/petrochemical.component";
import { PlasticComponent } from "./main-industries/plastic/plastic.component";
import { PowerComponent } from "./main-industries/power/power.component";
import { RailComponent } from "./main-industries/rail/rail.component";
import { SecurityAndFireComponent } from "./main-industries/security-and-fire/security-and-fire.component";
import { WaterComponent } from "./main-industries/water/water.component";
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    SharedModule,
    GalleriaModule,
    FormsModule,         //l-f
    ReactiveFormsModule //l-f
  ],
  declarations: [
    ...declarations,
    AgricultureFarmingComponent,
    AutomotiveComponent,
    ChemicalComponent,
    CraftBreweriesComponent,
    DefenceComponent,
    FoodBeverageComponent,
    IndustrialComponent,
    MarineComponent,
    MedicalPharmaceuticalAndDentalComponent,
    MiningComponent,
    NaturalGasComponent,
    OilAndGasComponent,
    PetrochemicalComponent,
    PlasticComponent,
    PowerComponent,
    RailComponent,
    SecurityAndFireComponent,
    WaterComponent,
    ShopNowComponent
  ]
})
export class HomeModule {}
