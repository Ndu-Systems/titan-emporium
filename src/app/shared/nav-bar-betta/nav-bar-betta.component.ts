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
  showMegamenu: boolean = true;
  megaItems: NavigationModel;
  products: ProductModel[] = [
    // Pumps
    {
      heading: 'Pumps',
      items: [
        {
          name: 'NUAIR AND ABAC',
          url: ''
        },
        {
          name: 'FINI',
          url: ''
        }
      ],
      subs: [
        {
          heading: 'INGESOLLRAND REPLACMENT PUMPS',
          items: [
            {
              name: 'CAST IRON 14BAR',
              url: ''
            },

            {
              name: 'CAST IRON HIGH PRESSURE',
              url: ''
            },
            {
              name: 'Cast Iron Vacuum Pumps',
              url: ''
            },

          ]
        },
        {
          heading: 'INGESOLLRAND REPLACMENT  SPARES',
          items: [
            {
              name: 'TYPE 30 REPACMENT PARTS',
              url: ''
            }
          ]
        }
      ]
    },


    // Valves   
    {
      heading: 'Valves',
      subs: [
        {
          heading: 'Safey Valve',
          items: [
            {
              name: '  Soft Seat Saftey Valve', url: ''
            }
          ]

        },
        {
          heading: 'Check Valves',
          items: [
            { url: '', name: '90 Degree Check Valves ( Add)' },
            { url: '', name: 'In tank Check Valves' },
            { url: '', name: 'In Line Check Valve' },
            { url: '', name: 'Horizontal In Line Check Valve' }

          ]
        }
        , {
          heading: 'Petrol & Diesel Valve',
          items: [
            {
              name: '',
              url: 'Governor Valve ( Add)'
            }
          ]
        },
        {
          heading: 'Unloader pillot Valve',
          items: [
            { url: '', name: 'IR auxiliary valve (Add)' },
            { url: '', name: 'RC Series Pilot Valves' },
            { url: '', name: 'RCL Series Pilot Valves' },
          ]
        },
        {
          heading: 'Throttle Controlae',
          items: [
            { url: '', name: 'Cable Style Throttle Controls' },
            { url: '', name: 'Airline style throttle Controls' }
          ]
        }
      ]
    },


    // General Piston Spares
    {
      heading: 'General Piston Spares',
      items: [
        { url: '', name: 'NEMA Pressure Switch' },
        { url: '', name: 'FESCOLO Pressure Switch' },
        { url: '', name: 'Star Delta Starter' },
        { url: '', name: 'Pressure Gauges' },
        { url: '', name: 'Pressure Regulators' },
        { url: '', name: 'Oil Filler Plug and Elbows' },
        { url: '', name: 'Air Filter' },
        { url: '', name: 'Condensate Drains' },
        { url: '', name: 'Capacitor' },
        { url: '', name: 'Elecatric Motors' },
        { url: '', name: 'Belt Gauards' },
        { url: '', name: 'Fittings' }
      ]
    },
    // Screw Compressors 
    {
      heading: 'Screw Compressors',
      subs: [
        {
          heading: 'Fescolo',
          items: [
            {
              name: 'BELT DRIVE (AHB SERIES)',
              url: '',
            },
            {
              name: 'DIRECT DRIVE (AHD SERIES)',
              url: '',
            }
          ]
        },
        {
          heading: 'FINI SCREW',
          items: [
            {
              name: 'Cube 5.5kw - 7.5kw',
              url: '',
            },
            {
              name: 'MICRO Series 2.2kW – 55kW',
              url: '',
            },
            {
              name: 'PLUS Series 7.5kW – 75kW',
              url: '',
            },
            {
              name: 'PLUS VS Series 22kW – 75kW',
              url: ''
            },
            {
              name: 'VISION Series 7.5kW – 22kW ',
              url: ''
            },
            {
              name: 'K-MAX Series 7.5kW – 90kW ',
              url: ''
            },
          ]
        }
      ]
    },
    // Pistion Compressors

    {
      heading: 'Pistion Compressors',
      items: [
        {
          name: 'NUAIR',
          url: ''
        },
        {
          name: 'FINI',
          url: ''
        },
        {
          name: 'FESCOLO',
          url: ''
        },
      ]

    },



    //  Air Treatment
    {
      heading: 'Air Treatment',
      items: [
        { url: '', name: 'Fescolo' }
      ]
    },

    //  INGESOLLRAND REPLACMENT  SPARES

    {
      heading: 'INGESOLLRAND REPLACMENT  SPARES',
      items: [
        { name: 'TYPE 30 REPACMENT PARTS ( Add)', url: '' }
      ]
    },

    //  Oil Free

    {
      heading: 'Oil Free',
      items: [
        { name: 'FINI MEDICAIR', url: '' },
        { name: 'Oil Free PET ( Add)', url: '' },
      ]
    },

    //  Petrol & Diesel Engines

    {
      heading: 'Petrol & Diesel Engines',
      items: [
        { name: 'Honda', url: '' },
        { name: 'Fescolo', url: '' },
        { name: 'Yahnmar', url: '' },
      ]
    },

    //  Petrol & Diesel Compressors

    {
      heading: 'Petrol & Diesel Compressors',
      items: [
        { name: 'Honda', url: '' },
        { name: 'Fescolo', url: '' },
        { name: 'Yahnmar', url: '' },
      ]
    },


  ];
  showAboutMegamenu: boolean;
  showServicesMegamenu: boolean;
  showIndustriesMegamenu: boolean;
  showSustainabilityMegamenu: boolean;
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
        isMega: true,
        // children: [
        //   {
        //     name: 'AIR COMPRESSORS PUMPS',
        //     url: '',
        //     children: [
        //       {
        //         name: 'NUAIR & ABAC',
        //         url: '',
        //         children: [
        //           {
        //             name: 'NuAir & Abac',
        //             url: 'product/shamal-nuair',
        //             children: []
        //           }
        //         ]
        //       },
        //       {
        //         name: 'INGESOLLRAND REPACMENT PUMP',
        //         url: '',
        //         children: [
        //           {
        //             name: 'CAST IRON TO 14 BAR',
        //             url: 'product/solidair_castiron_14BAR_pump',
        //             children: []
        //           },
        //           {
        //             name: 'CAST IRON HIGH',
        //             url: 'product/solidair_castiron_highpressure_pump',
        //             children: []
        //           },
        //           {
        //             name: 'CAST IRON SINGLE STAGE',
        //             url: 'product/solidair_castiron_vacuumpump',
        //             children: []
        //           }
        //         ]
        //       },
        //       {
        //         name: 'Fini Pumps',
        //         url: '',
        //         children: [
        //           {
        //             name: 'FINI BELT DRIVEN COMPRESSOR PUMPS',
        //             url: 'product/fini-belt-driven-compressor-pumps',
        //             children: []
        //           }
        //         ]
        //       }
        //     ]
        //   },
        //   {
        //     name: 'Valves',
        //     url: '',
        //     children: [
        //       {
        //         name: 'Safety Valves',
        //         url: '',
        //         children: [
        //           {
        //             name: 'SOFT SEAT SAFETY VALVES',
        //             url: 'valve/seat-safety-valves',
        //             children: []
        //           }
        //         ]
        //       },
        //       {
        //         name: 'Check Valves',
        //         url: '',
        //         children: [
        //           {
        //             name: 'In Tank Check Valves',
        //             url: 'valve/tank-check-valves',
        //             children: []
        //           },
        //           {
        //             name: 'In Line Check Valves',
        //             url: 'valve/line-check-valves',
        //             children: []
        //           },
        //           {
        //             name: 'Horizontal In Line Check Valves',
        //             url: 'valve/horizontal-line-check-valves',
        //             children: []
        //           }
        //         ]
        //       },
        //       {
        //         name: 'Throttle Controls',
        //         url: '',
        //         children: [
        //           {
        //             name: 'Cable Style Throttle Controls',
        //             url: 'valve/product/cable-style-throttle-controls',
        //             children: []
        //           },
        //           {
        //             name: 'Airline Style Throttle Controls',
        //             url: 'product/airline-style-throttle-controls',
        //             children: []
        //           }
        //         ]
        //       },
        //       {
        //         name: 'Unloader Pilots',
        //         url: '',
        //         children: [
        //           {
        //             name: 'RC Series Pilot Valves',
        //             url: 'product/rc-series-pilot-valves',
        //             children: []
        //           },
        //           {
        //             name: 'RCL Series Pilot Valves',
        //             url: 'product/rcl-series-pilot-valves',
        //             children: []
        //           }
        //         ]
        //       },

        //     ]
        //   },
        //   {
        //     name: 'Fescolo Screw compressors',
        //     url: '',

        //     children: [
        //       {
        //         name: 'Standard Screw Air Compressor',
        //         url: 'product-fs/standard-screw-air-compressor',
        //         children: [{
        //           name: 'Belt driven type (AHB series)',
        //           url: 'product-fs/belt-driven-type-ahb-series',
        //           children: []
        //         }, {
        //           name: 'Direct driven type (AHD series)',
        //           url: 'product-fs/direct-driven-type-ahd-series',
        //           children: []
        //         }]
        //       },
        //       {
        //         name: 'Integrated Screw Air Compressor',
        //         url: '',
        //         children: []
        //       },
        //       {
        //         name: 'Inverter type screw air compressor',
        //         url: '',
        //         children: []
        //       },
        //       {
        //         name: 'Two stage screw air compressor',
        //         url: '',
        //         children: []
        //       },
        //       {
        //         name: 'Oil-free Screw Air Compressor',
        //         url: '',
        //         children: []
        //       }
        //     ]
        //   },
        //   {
        //     name: 'screw machines',
        //     url: '',
        //     children: [
        //       {
        //         name: 'fescolo screw',
        //         url: '',
        //         children: [
        //           {
        //             name: 'standard screw',
        //             url: ''
        //           },
        //           {
        //             name: 'integrated screw',
        //             url: ''
        //           },
        //           {
        //             name: 'inverter screw',
        //             url: ''
        //           }
        //         ]
        //       },
        //       {
        //         name: 'fini screw',
        //         url: '',
        //         children: [
        //           {
        //             name: 'micro',
        //             url: 'screw-machines/micro'
        //           },
        //           {
        //             name: 'series plus',
        //             url: 'screw-machines/'
        //           },
        //           {
        //             name: 'kmax',
        //             url: 'screw-machines/'
        //           }
        //         ]
        //       }
        //     ]
        //   },
        //   {
        //     name: 'Engines',
        //     url: '',
        //     children: []
        //   }
        // ]
      },
      {
        name: 'ABOUT US',
        url: '/',
        isMega: true,
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
        isMega: true,
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
        isMega: true,
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
        isMega: true,
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

    this.megaItems = this.navigation[1];
  }
  toggleMenu() {
    this.showMobleMenu = !this.showMobleMenu;
  }
  showMegaMenuHover(code: string) {

    this.showMegamenu = code === 'PRODUCTS';
    this.showAboutMegamenu = code === 'ABOUT US';
    this.showServicesMegamenu = code === 'SERVICES';
    this.showIndustriesMegamenu = code === 'INDUSTRIES';
    this.showSustainabilityMegamenu = code === 'SUSTAINABILITY';
  }
  toggleMegaMenu() {
    // this.showMegamenu = false;
    // this.showAboutMegamenu = false;
  }
}

export interface NavigationModel {
  name: string;
  url: string;
  children?: NavigationModel[];
  isMega?: boolean;
}



export interface ProductModel {
  heading: string;
  items?: ItemsModel[];
  subs?: SubModel[];
}
export interface SubModel {
  heading: string;
  items?: ItemsModel[];
}
export interface ItemsModel {
  name: string;
  url: string;
}

