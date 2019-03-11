import { ValvesComponent } from './products/valves/valves.component';
import { AirCompressorsForThePharmaceuticalIndustryComponent } from './main-industries/air-compressors-for-the-pharmaceutical-industry/air-compressors-for-the-pharmaceutical-industry.component';
import { WoodworkingComponent } from './main-industries/woodworking/woodworking.component';
import { WaterComponent } from "./main-industries/water/water.component";
import { NaturalGasComponent } from "./main-industries/natural-gas/natural-gas.component";
import { MiningComponent } from "./main-industries/mining/mining.component";
import { MedicalPharmaceuticalAndDentalComponent } from "./main-industries/medical-pharmaceutical-and-dental/medical-pharmaceutical-and-dental.component";
import { MarineComponent } from "./main-industries/marine/marine.component";
import { FoodBeverageComponent } from "./main-industries/food-beverage/food-beverage.component";
import { CraftBreweriesComponent } from "./main-industries/craft-breweries/craft-breweries.component";
import { ChemicalComponent } from "./main-industries/chemical/chemical.component";
import { AutomotiveComponent } from "./main-industries/automotive/automotive.component";
import { AgricultureFarmingComponent } from "./main-industries/agriculture-farming/agriculture-farming.component";
import { GovernanceComponent } from "./main-sustainability/governance/governance.component";
import { PoliciesAndDisclosuresComponent } from "./main-sustainability/policies-and-disclosures/policies-and-disclosures.component";
import { SustainabilityIntroComponent } from "./main-sustainability/sustainability-intro/sustainability-intro.component";
import { PipeJackingComponent } from "./main-services/pipe-jacking/pipe-jacking.component";
import { CompressedAirPipeworkComponent } from "./main-services/compressed-air-pipework/compressed-air-pipework.component";
import { AssetLeasingComponent } from "./main-services/asset-leasing/asset-leasing.component";
import { CompressorRepairAndServiceComponent } from "./main-services/compressor-repair-and-service/compressor-repair-and-service.component";
import { AirCompressorHireComponent } from "./main-services/air-compressor-hire/air-compressor-hire.component";
import { AtAGlanceComponent } from "./main-about-us/at-a-glance/at-a-glance.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { OurStrategyComponent } from "./main-about-us/our-strategy/our-strategy.component";
import { OurApproachComponent } from "./main-about-us/our-approach/our-approach.component";
import { OurVisionComponent } from "./main-about-us/our-vision/our-vision.component";
import { OurValuesComponent } from "./main-about-us/our-values/our-values.component";
import { ServiceAgreementsComponent } from "./main-services/service-agreements/service-agreements.component";
import { SupplyAndInstallationComponent } from "./main-services/supply-and-installation/supply-and-installation.component";
import { DirectionalDrillingComponent } from "./main-services/directional-drilling/directional-drilling.component";
import { OurPeopleComponent } from "./main-sustainability/our-people/our-people.component";
import { SocietyComponent } from "./main-sustainability/society/society.component";
import { TransformationComponent } from "./main-sustainability/transformation/transformation.component";
import { SafetyComponent } from "./main-sustainability/safety/safety.component";
import { EnvironmentalComponent } from "./main-sustainability/environmental/environmental.component";
import { RiskManagementComponent } from "./main-sustainability/risk-management/risk-management.component";
import { DefenceComponent } from "./main-industries/defence/defence.component";
import { IndustrialComponent } from "./main-industries/industrial/industrial.component";
import { OilAndGasComponent } from "./main-industries/oil-and-gas/oil-and-gas.component";
import { PetrochemicalComponent } from "./main-industries/petrochemical/petrochemical.component";
import { PlasticComponent } from "./main-industries/plastic/plastic.component";
import { PowerComponent } from "./main-industries/power/power.component";
import { RailComponent } from "./main-industries/rail/rail.component";
import { SecurityAndFireComponent } from "./main-industries/security-and-fire/security-and-fire.component";
import { ProductComponent } from './products/product/product.component';


export const declarations: any[] = [
  ContactUsComponent,
  HomeComponent,
  AtAGlanceComponent,
  OurStrategyComponent,
  OurApproachComponent,
  OurVisionComponent,
  OurValuesComponent,
  AirCompressorHireComponent,
  CompressorRepairAndServiceComponent,
  AssetLeasingComponent,
  CompressedAirPipeworkComponent,
  ServiceAgreementsComponent,
  SupplyAndInstallationComponent,
  DirectionalDrillingComponent,
  PipeJackingComponent,
  SustainabilityIntroComponent,
  OurPeopleComponent,
  SocietyComponent,
  TransformationComponent,
  SafetyComponent,
  EnvironmentalComponent,
  PoliciesAndDisclosuresComponent,
  RiskManagementComponent,
  GovernanceComponent,
  AgricultureFarmingComponent,
  AutomotiveComponent,
  ChemicalComponent,
  CraftBreweriesComponent,
  DefenceComponent,
  FoodBeverageComponent,
  IndustrialComponent,
  MarineComponent,
  MedicalPharmaceuticalAndDentalComponent,
  NaturalGasComponent,
  OilAndGasComponent,
  PetrochemicalComponent,
  PowerComponent,
  RailComponent,
  SecurityAndFireComponent,
  WaterComponent,
  WoodworkingComponent,
  MiningComponent,
  PlasticComponent,
  
  SustainabilityIntroComponent,
  OurPeopleComponent,
  SocietyComponent,
  TransformationComponent,
  SafetyComponent,
  EnvironmentalComponent,
  PoliciesAndDisclosuresComponent,
  PlasticComponent,
  GovernanceComponent,
  AirCompressorsForThePharmaceuticalIndustryComponent,

  ProductComponent,
  ValvesComponent
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
  },
  {
    path: "air-compressor-hire",
    component: AirCompressorHireComponent
  },
  {
    path: "compressor-repair-and-service",
    component: CompressorRepairAndServiceComponent
  },
  {
    path: "asset-leasing",
    component: AssetLeasingComponent
  },
  {
    path: "compressed-air-pipework",
    component: CompressedAirPipeworkComponent
  },
  {
    path: "service-agreements",
    component: ServiceAgreementsComponent
  },
  {
    path: "supply-and-installation",
    component: SupplyAndInstallationComponent
  },
  {
    path: "directional-drilling",
    component: DirectionalDrillingComponent
  },
  {
    path: "pipe-jacking",
    component: PipeJackingComponent
  },
  {
    path: "sustainability-intro",
    component: SustainabilityIntroComponent
  },
  {
    path: "our-people",
    component: OurPeopleComponent
  },
  {
    path: "society",
    component: SocietyComponent
  },
  {
    path: "transformation",
    component: TransformationComponent
  },
  {
    path: "safety",
    component: SafetyComponent
  },
  {
    path: "environmental",
    component: EnvironmentalComponent
  },
  {
    path: "policies-and-disclosures",
    component: PoliciesAndDisclosuresComponent
  },
  {
    path: "risk-management",
    component: RiskManagementComponent
  },
  {
    path: "governance",
    component: GovernanceComponent
  },
  //
  {
    path: "agriculture-farming",
    component: AgricultureFarmingComponent
  },
  {
    path: "automotive",
    component: AutomotiveComponent
  },
  {
    path: "chemical",
    component: ChemicalComponent
  },
  {
    path: "craft-breweries",
    component: CraftBreweriesComponent
  },
  {
    path: "defence",
    component: DefenceComponent
  },
  { path: "food-beverage", component: FoodBeverageComponent },

  { path: "industrial", component: IndustrialComponent },
  { path: "marine", component: MarineComponent },
  {
    path: "medical-pharmaceutical-and-dental",
    component: MedicalPharmaceuticalAndDentalComponent
  },
  { path: "natural-gas", component: NaturalGasComponent },
  { path: "oil-and-gas", component: OilAndGasComponent },
  { path: "petrochemical", component: PetrochemicalComponent },
  { path: "power", component: PowerComponent },
  { path: "rail", component: RailComponent },
  { path: "security-and-fire", component: SecurityAndFireComponent },
  { path: "water", component: WaterComponent },
  { path: "woodworking", component: WoodworkingComponent },
  { path: "mining", component: MiningComponent },
  { path: "plastic", component: PlasticComponent },
  //sustainability
  { path: "sustainability-intro", component: SustainabilityIntroComponent },
  { path: "our-people", component: OurPeopleComponent },
  { path: "society", component: SocietyComponent },
  { path: "transformation", component: TransformationComponent },
  { path: "safety", component: SafetyComponent },
  { path: "environmental", component: EnvironmentalComponent },
  { path: "policies-and-disclosures", component: PoliciesAndDisclosuresComponent },
  { path: "risk-management", component: PlasticComponent },
  { path: "governance", component: GovernanceComponent },
  { path: "air-compressors-for-the-pharmaceutical-industry", component: AirCompressorsForThePharmaceuticalIndustryComponent },

  //products
  { path: "product/:id", component: ProductComponent },
  { path: "valve/:id", component: ValvesComponent },



];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutes {}


