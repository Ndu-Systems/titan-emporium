export interface ProductInfoFini {
  id: string;
  heading: string;
  images: string[];
  secondaryHeading: string;
  paragraphs: string[];
  data: TableProductInfoFini;
  file?: string;
}
export interface TableProductInfoFini {
  headings: string[];
  rows: any[];
}



export const fini_info_array: ProductInfoFini[] = [
  {
    id: '4kw-11kw',
    heading: '4KW-11KW (5HP-15HP)',
    images: [
      `assets/products/fescolo-screw/B88A5901.jpg`,
      `assets/products/fescolo-screw/B88A5905.jpg`,
      `assets/products/fescolo-screw/B88A5914.jpg`,
      `assets/products/fescolo-screw/B88A5920.jpg`],
    secondaryHeading: 'Name:Fescolo belt driven screw air compressor',
    paragraphs: [`Category:Standard screw air compressor`, `
        Name:Fescolo belt driven screw air compressor
        Category:Standard screw air compressor
        Fescolo screw compressors with V-belt
         drive are economical and reliable,use
          Germany technology which provide high
          quality air,low noise and high efficiency,
          easy to install,simple operation and miantenance.`],
    // data: 'assets/products/fescolo-screw/tb1.PNG',
    data: {
      headings: ['Model', '	AHB-50A', 'AHB-60A', 'AHB-75A', 'AHB-100A'],
      rows: [
        [

          ['Free air deliver/Discharge pressure(m3/min/Mpa)'],
          ['0.55/0.8'],
          [
            '0.85/0.7',
            '0.75/0.8'
          ], [
            '1.2/0.7',
            '1.1/0.8',
            '0.9/1.0',
            '0.7/1.2'
          ], [
            '1.6/0.7',
            '1.5/0.8',
            '1.3/1.0',
            '1.1/1.2'
          ]
        ],
        [

          ['Free air deliver',
            '/Discharge pressure',
            '(CFM/PSI)'],
          ['20/116'],
          [
            '30/102',
            '27/116'
          ], [
            '42/102',
            '39116',
            '32/145',
            '25/174'
          ], [
            '57/102',
            '53/116',
            '46/145',
            '39/174'
          ]
        ],
        [
          ['Compression stage	'],
          [
            'Single stage'
          ]
        ],
        [
          ['Ambient temprerature'],
          [
            '  -5--+45℃'
          ]
        ],
        [
          ['Cooling mode'],
          [
            'Air cooling'
          ]
        ],
        [
          ['Discharge temperature   (0C)'],
          [
            'Ambient temperature+15℃'
          ]
        ],
        [
          ['Lubricant   (L)'],
          ['3'],
          ['3.7'],
          ['3.7'],
          ['10']
        ],
        [
          ['Noise Level (Db)'],
          ['62±2'],
          ['62±2'],
          ['62±2'],
          ['64±2']
        ],
        [
          ['Drive method'],
          ['Belt driven'],
        ],
        [
          ['Motor power (KW/HP)'],
          ['380/3/50'],
        ],
        [
          ['Electricity (V/ph/Hz)'],
          ['4/5.5'],
          ['5.5/7.5'],
          ['7.5/10'],
          ['11/15'],
        ],
        [
          ['Starting method'],
          ['Direct starting'],
          ['Direct starting'],
          ['Direct starting'],
          ['Star delta starting']
        ],
        [
          ['Dimension L*W*H (mm)'],
          ['920*600*695'],
          ['860*730*960'],
          ['860*730*960'],
          ['940*800*1075'],
        ],
        [
          ['Net Weight   (kg)'],
          ['135'],
          ['210'],
          ['223'],
          ['315']
        ],
        [
          ['Air outlet diameter (inch/mm)'],
          ['3/4"	'],
          ['3/4"	'],
          ['3/4"	'],
          ['3/4"'],
        ]
      ]
    },
    // file: 'assets/products/fescolo-screw/B88A5914.jpg'
  },
  {
    id: '15kw-30kw',
    heading: '15KW-30KW (20HP-40HP)',
    images: [
      `assets/products/fescolo-screw/B88A5932.jpg`,
      `assets/products/fescolo-screw/B88A5934.jpg`,
      `assets/products/fescolo-screw/B88A5945.jpg`,
      `assets/products/fescolo-screw/B88A5947.jpg`,
    ],
    secondaryHeading: 'Name:Fescolo belt driven screw air compressor',
    paragraphs: [`Category:Standard screw air compressor`, `*Double screw`,
      `*100% continuous duty operation`,
      `*Easy to use and read LCD control panel`,
      `(chinese,english,russian,spanish language available)`,],
    // data: 'assets/products/fescolo-screw/tb1.PNG',
    data: {
      headings: ['Model', 'AHB-20A', 'AHB-25A', 'AHB-30A', 'AHB-40A'],
      rows: [
        [

          ['Free air deliver/Discharge pressure(m3/min/Mpa)'],
          [`2.5/0.7`,
            `2.3/0.8`,
            `2.1/1.0`,
            `1.9/1.2`],
          [
            '3.2/0.7', '2.9/0.8', '2.6/1.0', '2.2/1.2'
          ], [
            '3.8/0.7', '3.6/0.8', '3.2/1.0', '2.8/1.2'
          ], [
            '5.2/0.7', '5.0/0.8', '4.5/1.0', '3.8/1.2'
          ]
        ],
        [

          ['Free air deliver', '/Discharge pressure', '(CFM/PSI)'],

          [
            '88/102', '81/116', '74/145', '67/174'
          ], [
            '113/102', '102/116', '92/145', '78/174'
          ], [
            '134/102', '127/116', '113/145', '99/174'
          ],
          ['184/102', '177/116', '159/145', '134/174']
        ],
        [
          ['Compression stage	'],
          [
            '  Single stage'
          ]
        ],
        [
          ['Ambient temprerature'],
          [
            '  -5--+45℃'
          ]
        ],
        [
          ['Cooling mode'],
          [
            'Air cooling'
          ]
        ],
        [
          ['Discharge temperature   (0C)'],
          [
            'Ambient temperature+15℃'
          ]
        ],
        [
          ['Lubricant   (L)'],
          ['10'],
          ['14.5'],
          ['14.5'],
          ['15']
        ],
        [
          ['Noise Level (Db)'],
          ['62±2'],
          ['65±2'],
          ['65±2'],
          ['65±2']
        ],
        [
          ['Drive method'],
          ['Belt driven'],
        ],
        [
          ['Electricity (V/ph/Hz)'],
          ['380/3/50'],
        ],
        [
          ['Motor power (KW/HP)'],
          ['15/20'],
          ['18.5/25'],
          ['22/30'],
          ['30/40']
        ],
        [
          ['Starting method'],
          ['Star delta starting']
        ],
        [
          ['Dimension  L*W*H (mm)'],
          ['940*800*1075'],
          ['1200*950*1150'],
          ['200*950*1150'],
          ['1400*930*1280']
        ],
        [
          ['Net Weight   (kg)'],
          ['325'],
          ['455'],
          ['491'],
          ['566']
        ],
        [
          ['Air outlet diameter (inch/mm)'],
          ['3/4"'],
          ['1"'],
          ['1"'],
          ['1"']
        ]
      ]
    },
    // file: 'assets/products/fescolo-screw/B88A5914.jpg'
  },
  {
    id: '37kw-75kw',
    heading: '37KW-75KW (50HP-100HP)',
    images: [
      `assets/products/fescolo-screw/B88A6012.jpg`,
      `assets/products/fescolo-screw/B88A6014.jpg`,
      `assets/products/fescolo-screw/B88A6026.jpg`,
      `assets/products/fescolo-screw/B88A6027.jpg`,
      `assets/products/fescolo-screw/B88A6034.jpg`,
    ],
    secondaryHeading: 'Name:Fescolo belt driven screw air compressor',
    paragraphs: [`Category:Standard screw air compressor`,
      `Independent protection and continuous monitoring of main paramters control system.`],
    // data: 'assets/products/fescolo-screw/tb1.PNG',Category:Standard screw air compressor

    data: {
      headings: ['Model', 'AHB-50A', 'AHB-60A', 'AHB-75A', 'AHB-100A'],
      rows: [
        [

          ['Free air deliver/Discharge pressure(m3/min/Mpa)'],
          ['6.8/0.7', '6.2/0.8', '5.6/1.0', '4.9/1.2'],
          [
            '7.3/0.7', '7.0/0.8', '6.0/1.0', '5.6/1.2'
          ], [
            '10.0/0.7', '9.1/0.8', '8.5/1.0', '7.6/1.2'
          ], [
            '13.5/0.7', '12.6/0.8', '11.2/1.0', '10.0/1.2'
          ]
        ],
        [

          ['Free air deliver', '/Discharge pressure', '(CFM/PSI)'],

          [
            '240/102', '219/116', '198/145', '173/174'
          ], [
            '258/102', '247/116', '212/145', '198/174'
          ], [
            '353/102', '322/116', '300/145', '269/174'
          ],
          ['477/102', '445/116', '396/145', '353/174']
        ],
        [
          ['Compression stage	'],
          [
            '  Single stage'
          ]
        ],
        [
          ['Ambient temprerature'],
          [
            '  -5--+45℃'
          ]
        ],
        [
          ['Cooling mode'],
          [
            'Air cooling'
          ]
        ],
        [
          ['Discharge temperature   (0C)'],
          [
            'Ambient temperature+15℃'
          ]
        ],
        [
          ['Lubricant   (L)'],
          ['20'],
          ['20'],
          ['45'],
          ['45']
        ],
        [
          ['Noise Level (Db)'],
          ['66±2'],
          ['66±2'],
          ['68±2'],
          ['68±2']
        ],
        [
          ['Drive method'],
          ['Belt driven'],
        ],
        [
          ['Electricity (V/ph/Hz)'],
          ['380/3/50'],
        ],
        [
          ['Motor power (KW/HP)'],
          ['37/50'],
          ['45/60'],
          ['55/75'],
          ['75/100']
        ],
        [
          ['Starting method'],
          ['Star delta starting']
        ],
        [
          ['Dimension  L*W*H (mm)'],
          [`1500*990*1420`],
          [`1500*990*1420`],
          [`1730*1050*1550`],
          [`1730*1070*1650`],
        ],
        [
          ['Net Weight   (kg)'],
          ['695'],
          ['745'],
          ['1090'],
          ['1240']
        ],
        [
          ['Air outlet diameter (inch/mm)'],
          ['1 and 1/2"'],
          ['1 and 1/2"'],
          ['2"'],
          ['2"'],

        ]
      ]
    },
    // file: 'assets/products/fescolo-screw/B88A5914.jpg'
  },
  {
    id: '15kw-45kw',
    heading: '15KW-45KW (20HP-60HP)',
    images: [
      `assets/products/fescolo-screw/B88A5792.jpg`,
      `assets/products/fescolo-screw/B88A5793.jpg`,
      `assets/products/fescolo-screw/B88A5796.jpg`,
      `assets/products/fescolo-screw/B88A5810.jpg`
    ],
    secondaryHeading: 'Name:Fescolo direct driven screw air compressor',
    paragraphs: [`Category:Standard screw air compressor`,
      `Fescolo direct driven screw air compressor provides high quality air you can rely
            on to avoid costly downtime and production delay.`],
    data: {
      headings: ['Model', `AHD-20A`, `AHD-30A`, `AHD-50A`, `AHD-60A`],
      rows: [
        [

          ['Free air deliver/Discharge pressure(m3/min/Mpa)'],
          ['2.5/0.7', '2.3/0.8', '2.1/1.0', '1.9/1.2'],
          [
            '3.8/0.7', '3.6/0.8', '3.2/1.0', '2.8/1.2'
          ], [
            '6.8/0.7', '6.2/0.8', '5.6/1.0', '4.9/1.2'
          ], [
            '7.3/0.7', '7.0/0.8', '6.0/1.0', '5.6/1.2'
          ]
        ],
        [

          [`Free air deliver/Discharge pressure(CFM/PSI)`],

          [
            '88/102', '81/116', '74/145', '67/174'
          ], [
            '134/102', '127/116', '113/145', '99/174'
          ], [
            '240/102', '219/116', '198/145', '173/174'
          ],
          ['258/102', '247/116', '212/145', '198/174']
        ],
        [
          ['Compression stage	'],
          [
            '  Single stage'
          ]
        ],
        [
          ['Ambient temprerature'],
          [
            '  -5--+45℃'
          ]
        ],
        [
          ['Cooling mode'],
          [
            'Air cooling'
          ]
        ],
        [
          ['Discharge temperature   (0C)'],
          [
            'Ambient temperature+15℃'
          ]
        ],
        [
          ['Lubricant   (L)'],
          ['10'],
          ['14.5'],
          ['20'],
          ['20']
        ],
        [
          ['Noise Level (Db)'],
          ['64±2'],
          ['66±2'],
          ['68±2'],
          ['68±2']
        ],
        [
          ['Drive method'],
          ['Belt driven'],
        ],
        [
          ['Electricity (V/ph/Hz)'],
          ['380/3/50'],
        ],
        [
          ['Motor power (KW/HP)'],
          ['15/20'],
          ['22/30'],
          ['37/50'],
          ['45/60']
        ],
        [
          ['Starting method'],
          ['Star delta starting']
        ],
        [
          ['Dimension  L*W*H (mm)'],
          [`1160*700*1100`],
          [`1200*900*1150`],
          [`1560*1000*1365`],
          [`1560*1000*1365`],
        ],
        [
          ['Net Weight   (kg)'],
          ['400'],
          ['510'],
          ['740'],
          ['820']
        ],
        [
          ['Air outlet diameter (inch/mm)'],
          ['3/4"'],
          ['1"'],
          ['11/2"'],
          ['11/2"'],

        ]
      ]
    },
    // file: 'assets/products/fescolo-screw/B88A5914.jpg'
  },
  {
    id: '55kw-110kw',
    heading: '55KW-110KW (75HP-150HP)',
    images: [
      `assets/products/fescolo-screw/B88A5800.jpg`,
      `assets/products/fescolo-screw/B88A5809.jpg`,
      `assets/products/fescolo-screw/B88A5810.jpg`,
      `assets/products/fescolo-screw/B88A5811.jpg`
    ],
    secondaryHeading: 'Name:Fescolo direct driven screw air compressor',
    paragraphs: [`Category:Standard screw air compressor`,
      `The robust design ensures your process will
            function continuously even in the harshest conditions,such as temperature up to 55 degree.`],
    data: {
      headings: ['Model', `AHD-75A`, `AHD-100A`, `AHD-120A`, `AHD-150A`],
      rows: [
        [

          ['Free air deliver/Discharge pressure(m3/min/Mpa)'],
          ['10.0/0.7', '9.1/0.8', '8.5/1.0', '7.6/1.2'],
          [
            '13.5/0.7', '12.6/0.8', '11.2/1.0', '10.0/1.2'
          ], [
            '16.1/0.7', '15.0/0.8', '13.8/1.0', '12.3/1.2'
          ], [
            '21/0.7', '19.8/0.8', '17.0/1.0', '15.3/1.2'
          ]
        ],
        [

          [`Free air deliver/Discharge pressure(CFM/PSI)`],

          [
            '353/102', '322/116', '300/145', '269/174'
          ], [
            '477/102', '445/116', '396/145', '353/174'
          ], [
            '569/102', '530/116', '488/145', '435/174'
          ],
          ['742/102', '700/116', '601/145', '541/174']
        ],
        [
          ['Compression stage	'],
          [
            '  Single stage'
          ]
        ],
        [
          ['Ambient temprerature'],
          [
            '  -5--+45℃'
          ]
        ],
        [
          ['Cooling mode'],
          [
            'Air cooling'
          ]
        ],
        [
          ['Discharge temperature   (0C)'],
          [
            'Ambient temperature+15℃'
          ]
        ],
        [
          ['Lubricant   (L)'],
          ['45'],
          ['45'],
          ['75'],
          ['75'],
        ],
        [
          ['Noise Level (Db)'],
          ['72±2'],
          ['72±2'],
          ['72±2'],
          ['75±2']
        ],
        [
          ['Drive method'],
          ['Belt driven'],
        ],
        [
          ['Electricity (V/ph/Hz)'],
          ['380/3/50'],
        ],
        [
          ['Motor power (KW/HP)'],
          ['55/75	'],
          ['75/100'],
          ['90/120'],
          ['110/150']
        ],
        [
          ['Starting method'],
          ['Star delta starting']
        ],
        [
          ['Dimension  L*W*H (mm)'],
          [`1800*1070*1490`], [`1800*1070*1490`], [`2100*1400*1780`], [`2500*1450*1800`]
        ],
        [
          ['Net Weight   (kg)'],
          ['1100'],
          ['1270'],
          ['1450'],
          ['2150']
        ],
        [
          ['Air outlet diameter (inch/mm)'],
          ['2"'],
          ['2"'],
          ['2"'],
          ['2 and 1/2"'],
        ]
      ]
    },
    // file: 'assets/products/fescolo-screw/B88A5914.jpg'
  },
  {
    id: '132kw-250kw',
    heading: '132KW-250KW (175HP-350HP)',
    images: [
      `assets/products/fescolo-screw/B88A5800.jpg`,
      `assets/products/fescolo-screw/B88A5809.jpg`,
      `assets/products/fescolo-screw/B88A5810.jpg`,
      `assets/products/fescolo-screw/B88A5811.jpg`
    ],
    secondaryHeading: 'Name:Fescolo direct driven screw air compressor',
    paragraphs: [`Category:Standard screw air compressor`,
      `Fescolo supply screw air compressors with
            different voltage and frequency,such as
            380V/3phase/50HZ, 380V/3phase/60HZ,
            415V/3phase/50HZ, 220V/3phase/60HZ,
            460V/3phase/60HZ, 600V/3phase/60HZ,
            double voltage 230V/460V/3phase/60HZ etc.

            `],
    data: {
      headings: ['Model', `AHD-175A`, `AHD-220A`, `AHD-250A`, `AHD-300A`, `AHD-350A`],
      rows: [
        [

          ['Free air deliver/Discharge pressure(m3/min/Mpa)'],
          ['25.2/0.7', '24.0/0.8', '21.0/1.0', '18.3/1.2'],
          [
            '28.7/0.7', '27.6/0.8', '24.6/1.0', '21.5/1.2'
          ], [
            '32.0/0.7', '30.5/0.8', '27.5/1.0', '24.8/1.2'
          ], [
            '36.7/0.7', '34.5/0.8', '30.2/1.0', '27.8/1.2'
          ], ['42.0/0.7', '40.5/0.8', '38.1/1.0', '34.6/1.2']
        ],
        [

          [`Free air deliver/Discharge pressure(CFM/PSI)`],

          [
            '890/102', '848/116', '742/145', '647/174'
          ], [
            '1014/102', '975/116', '869/145', '760/174'
          ], [
            '1131/102', '1078/116', '972/145', '876/174'
          ],
          ['1297/102', '1219/116', '1067/145', '982/174'],
          ['1484/102', '1431/116', '1346/145', '1223/174']
        ],
        [
          ['Compression stage	'],
          [
            '  Single stage'
          ]
        ],
        [
          ['Ambient temprerature'],
          [
            '  -5--+45℃'
          ]
        ],
        [
          ['Cooling mode'],
          [
            'Air cooling'
          ]
        ],
        [
          ['Discharge temperature   (0C)'],
          [
            'Ambient temperature+15℃'
          ]
        ],
        [
          ['Lubricant   (L)'],
          ['85'],
          ['85'],
          ['120'],
          ['210'],
          ['220'],
        ],
        [
          ['Noise Level (Db)'],
          ['75±2'],
          ['75±2'],
          ['76±2'],
          ['76±2'],
          ['76±2']],
        [
          ['Drive method'],
          ['Belt driven'],
        ],
        [
          ['Electricity (V/ph/Hz)'],
          ['380/3/50'],
        ],
        [
          ['Motor power (KW/HP)'],
          [` 132/175`], [`160/220`], [`185/250`], [`220/300`], [`250/350`]
        ],
        [
          ['Starting method'],
          ['Star delta starting']
        ],
        [
          ['Dimension  L*W*H (mm)'],
          [`2700*1550*1800`], [`2700*1550*1800`], [`2800*1800*1950`], [`2800*1800*1950`], [`3250*2100*2`]],
        [
          ['Net Weight   (kg)'],
          ['2750'],
          ['3150'],
          ['3450'],
          ['3850'],
          ['4250']
        ],
        [
          ['Air outlet diameter (inch/mm)'],
          ['21/2"'],
          ['21/2"'],
          ['DN80'],
          ['DN80'],
          ['DN80']
        ]
      ]
    },
    // file: 'assets/products/fescolo-screw/B88A5914.jpg'
  },
];
