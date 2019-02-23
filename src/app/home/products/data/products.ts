import { Product } from "../models/product.model";

export const products: Array<Product> = [
  {
    id: "fini-belt-driven-compressor-pumps",
    name: "FINI BELT DRIVEN COMPRESSOR PUMPS",
    secondaryHeading: "Single-Stage Lubricated With Parallel Cylinders",
    imageUrl: "",
    details: [
      "Service Kits Are Available for Each Model (See Individual Pump). ",
      "To View The Breakdown Diagrams Click Here ",
      "Piston Compressor Lubricant Click Here"
    ],

    tableHeadings: [
      "CODE",
      "PRODUCT",
      "kW",
      "Hp",
      "L/min",
      "m3/h",
      "c.f.m",
      "Bar",
      "Psi",
      "Product L x W x H (mm)"
    ],
    tableRows:[
     [
        'F-41P0028SGL',
        'MK113',
        '4.0',
        '5.5',
        '556',
        '33.2',
        '19.6',
        '10',
        '145',
        '310 x 300 x 370'
     ],
     [
        'F-41P0019SGL',
        'MK103',
        '2.2',
        '3',
        '365',
        '21.8',
        '12.9',
        '10',
        '145',
        '270 x 260 x 300'
     ],
     [
        'F-41P0017SGL',
        'MK102',
        '1.5',
        '2',
        '235',
        '14.0',
        '8.3',
        '10',
        '145',
        '270 x 260 x 280'
     ],
     [
        'F-41P0018SGL',
        'MK102/N',
        '1.5',
        '2',
        '215',
        '12.9',
        '7.6',
        '10',
        '145',
        '270 x 260 x 270'
     ]
    ]
  }
];
