import { products } from './../../home/products/data/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-betta',
  templateUrl: './nav-bar-betta.component.html',
  styleUrls: ['./nav-bar-betta.component.scss']
})
export class NavBarBettaComponent implements OnInit {
  navigation: NavigationModel[] = [];
  showMobleMenu: boolean;
  constructor() { }

  ngOnInit() {
    this.navigation = [
      {
        name: 'Home',
        url: '',
        children: []
      },

      {
        name: 'PRODUCTS',
        url: '/',
        children: [
          {
            name: 'AIR COMPRESSORS PUMPS',
            url: '',
            children: [
              {
                name: 'NUAIR & ABAC',
                url: '',
                children: [
                  {
                    name: 'NuAir & Abac',
                    url: 'product/shamal-nuair',
                    children: []
                  }
                ]
              },
              {
                name: 'INGESOLLRAND REPACMENT PUMP',
                url: '',
                children: [
                  {
                    name: 'CAST IRON TO 14 BAR',
                    url: 'product/solidair_castiron_14BAR_pump',
                    children: []
                  },
                  {
                    name: 'CAST IRON HIGH',
                    url: 'product/solidair_castiron_highpressure_pump',
                    children: []
                  },
                  {
                    name: 'CAST IRON SINGLE STAGE',
                    url: 'product/solidair_castiron_vacuumpump',
                    children: []
                  }
                ]
              },
              {
                name: 'Fini Pumps',
                url: '',
                children: [
                  {
                    name: 'FINI BELT DRIVEN COMPRESSOR PUMPS',
                    url: 'product/fini-belt-driven-compressor-pumps',
                    children: []
                  }
                ]
              }
            ]
          },
          {
            name: 'Valves',
            url: '',
            children: [
              {
                name: 'Safety Valves',
                url: '',
                children: [
                  {
                    name: 'SOFT SEAT SAFETY VALVES',
                    url: 'valve/seat-safety-valves',
                    children: []
                  }
                ]
              },
              {
                name: 'Check Valves',
                url: '',
                children: [
                  {
                    name: 'In Tank Check Valves',
                    url: 'valve/tank-check-valves',
                    children: []
                  },
                  {
                    name: 'In Line Check Valves',
                    url: 'valve/line-check-valves',
                    children: []
                  },
                  {
                    name: 'Horizontal In Line Check Valves',
                    url: 'valve/horizontal-line-check-valves',
                    children: []
                  }
                ]
              },
              {
                name: 'Throttle Controls',
                url: '',
                children: [
                  {
                    name: 'Cable Style Throttle Controls',
                    url: 'valve/product/cable-style-throttle-controls',
                    children: []
                  },
                  {
                    name: 'Airline Style Throttle Controls',
                    url: 'product/airline-style-throttle-controls',
                    children: []
                  }
                ]
              },
              {
                name: 'Unloader Pilots',
                url: '',
                children: [
                  {
                    name: 'RC Series Pilot Valves',
                    url: 'product/rc-series-pilot-valves',
                    children: []
                  },
                  {
                    name: 'RCL Series Pilot Valves',
                    url: 'product/rcl-series-pilot-valves',
                    children: []
                  }
                ]
              },

            ]
          },
          {
            name: 'Fescolo Screw compressors',
            url: '',

            children: [
              {
                name: 'Standard Screw Air Compressor',
                url: 'product-fs/standard-screw-air-compressor',
                children: [{
                  name: 'Belt driven type (AHB series)',
                  url: 'product-fs/belt-driven-type-ahb-series',
                  children: []
                }, {
                  name: 'Direct driven type (AHD series)',
                  url: 'product-fs/direct-driven-type-ahd-series',
                  children: []
                }]
              },
              {
                name: 'Integrated Screw Air Compressor',
                url: '',
                children: []
              },
              {
                name: 'Inverter type screw air compressor',
                url: '',
                children: []
              },
              {
                name: 'Two stage screw air compressor',
                url: '',
                children: []
              },
              {
                name: 'Oil-free Screw Air Compressor',
                url: '',
                children: []
              }
            ]
          },
          {
            name: 'screw machines',
            url: '',
            children: [
              {
                name: 'fescolo screw',
                url: '',
                children: [
                  {
                    name: 'standard screw',
                    url: ''
                  },
                  {
                    name: 'integrated screw',
                    url: ''
                  },
                  {
                    name: 'inverter screw',
                    url: ''
                  }
                ]
              },
              {
                name: 'fini screw',
                url: '',
                children: [
                  {
                    name: 'micro',
                    url: 'screw-machines/micro'
                  },
                  {
                    name: 'series plus',
                    url: 'screw-machines/'
                  },
                  {
                    name: 'kmax',
                    url: 'screw-machines/'
                  }
                ]
              }
            ]
          },
          {
            name: 'Engines',
            url: '',
            children: []
          }
        ]
      },
      {
        name: 'ABOUT US',
        url: '/',
        children: [
          {
            name: 'The Titan Emporium At a Glance',
            url: 'at-a-glance',
            children: []
          },
          {
            name: 'Our Vision',
            url: 'our-vision',
            children: []
          },
          {
            name: 'Our Values',
            url: 'our-values',
            children: []
          },
          {
            name: 'Our Approach',
            url: 'our-approach',
            children: []
          },
          {
            name: 'Our strategy',
            url: 'our-strategy',
            children: []
          }
        ]
      },
      {
        name: 'SERVICES',
        url: '/',
        children: [
          {
            url: 'air-compressor-hire',
            name: 'Air Compressor Hire',
            children: []
          },
          {
            url: 'compressor-repair-and-service',
            name: 'Air Compressor Repair & Service',
            children: []
          },
          { url: 'asset-leasing', name: 'Asset Leasing', children: [] },
          {
            url: 'compressed-air-pipework',
            name: 'Compressed Air Pipework',
            children: []
          },
          {
            url: 'service-agreements',
            name: 'Service Agreements',
            children: []
          },
          {
            url: 'supply-and-installation',
            name: 'Supply & Installation',
            children: []
          },
          {
            url: 'directional-drilling',
            name: 'Directional Drilling',
            children: []
          },
          { url: 'pipe-jacking', name: 'Pipe Jacking', children: [] }
        ]
      },
      {
        name: 'INDUSTRIES',
        url: '/',
        children: [
          {
            url: 'agriculture-farming',
            name: 'Agriculture & Farming',
            children: []
          },
          { url: 'automotive', name: 'automotive', children: [] },
          { url: 'chemical', name: 'chemical', children: [] },
          { url: 'craft-breweries', name: 'craft breweries', children: [] },
          { url: 'defence', name: 'defence', children: [] },
          { url: 'food-beverage', name: 'food & beverage', children: [] },
          { url: 'industrial', name: 'industrial', children: [] },
          { url: 'marine', name: 'marine Industry', children: [] },
          { url: 'mining', name: 'mining', children: [] },
          { url: 'natural-gas', name: 'natural gas', children: [] },
          { url: 'oil-and-gas', name: 'oil and gas', children: [] },
          { url: 'petrochemical', name: 'petrochemical', children: [] },
          { url: 'plastic', name: 'plastic', children: [] },
          { url: 'power', name: 'power', children: [] },
          { url: 'water', name: 'water', children: [] },
          { url: 'woodworking', name: 'woodworking', children: [] }
        ]
      },
      {
        name: 'SUSTAINABILITY',
        url: '/',
        children: [
          {
            url: 'sustainability-intro',
            name: 'The Titan Emporium and Sustainability',
            children: []
          },
          { url: 'our-people', name: 'our people', children: [] },
          { url: 'society', name: 'society', children: [] },
          { url: 'transformation', name: 'transformation', children: [] },
          { url: 'safety', name: 'safety', children: [] },
          { url: 'environmental', name: 'environmental', children: [] },
          {
            url: 'policies-and-disclosures',
            name: 'policies and disclosures',
            children: []
          },
          { url: 'risk-management', name: 'risk management', children: [] },
          { url: 'governance', name: 'governance', children: [] }
        ]
      },
      {
        name: 'CONTACT US',
        url: 'contact-us',
        children: []
      }
    ];
  }
  toggleMenu() {
    this.showMobleMenu = !this.showMobleMenu;
  }
}

export interface NavigationModel {
  name: string;
  url: string;
  children?: NavigationModel[];
}
