import { OilFree } from "../models";

export const OIL_FREE_DATA: OilFree[] = [
  // FINI MEDICAIR
  {
    id: 'medicair',
    heading: 'FINI-MEDICAIR DENTAL AND OIL FREE COMPRESSORS',
    headerImage: 'assets/products/oil-free/Category_medic_air_logo_1.jpg',
    headerPoints: [
      // tslint:disable-next-line: max-line-length
      'Designed specifically for the supplying the highest quality of oil-free compressed air necessary for the use of all equipment in the dental surgery and orthodontic laboratories and all other applications where high quality, clean compressed air is critical. These compressors are designed and manufactured with specific regard to the health of the patient and to safeguard the highest hygiene and air quality standards. The Medicair program is available in two different configurations, both manufactured with the same high-quality oil-free pumps and components: Med Series standard configuration and Dr Sonic- Silenced configuration 55-57 dB(A). Both series are available with adsorption dryer. Range 0.55kW to 4.4kW, 55 L/min to 470 L/min.'
    ],
    tables: [
      // table 1
      {
        name: 'Medicair Without Dryer',
        imageUrl: 'assets/products/oil-free/Med_160-24_2_1.jpg',
        // tslint:disable-next-line: max-line-length
        description: 'The Fini Medicair range includes models to suit dental applications of all sizes from 1 chair to 8 chair surgeries. The Medicair range are also suitable for laboratory and clean air applications in a variety of sittuations. Each model features the proven and reliable Fini oil less compressor pump unit with automatic controls for ease of operation.The Medicair range is available in five models from 0.55kW to 4.4kW with capacity from 55 L/min to 440 L/min',
        tableHeadings: ['S', 'CODE', 'PRODUCT', 'Chairs', 'Receiver Size', 'L/min', 'kw', 'c.f.m', 'Bar', 'Psi', 'dB(A)'],
        tableRows: [
          [
            [''],
            ['F-FVDV504FNM292'],
            ['Med320-50V-3M'],
            ['4'],
            ['8.2'],
            ['235'],
            ['3'],
            ['2.2'],
            ['8'],
            ['116'],
            ['72']
          ],
          [
            [''],
            ['F-FVGN541FNN016'],
            ['Med640-90F-6 T'],
            ['8'],
            ['90Lt'],
            ['470'],
            ['4.4'],
            ['16.6'],
            ['8'],
            ['116'],
            ['76']
          ],
        ]
      },

      {
        name: 'Medicair With Dryer',
        imageUrl: 'assets/products/oil-free/Med_160-24_2_1.jpg',
        // tslint:disable-next-line: max-line-length
        description: 'The Fini Medicair range includes models to suit dental applications of all sizes from 1 chair to 8 chair surgeries. The Medicair range are also suitable for laboratory and clean air applications in a variety of sittuations. Each model features the proven and reliable Fini oil less compressor pump unit with automatic controls for ease of operation. The models with dryers can be used with the correct filtration and installation, as part of a system to comply with HTM 2022 The Medicair range with dryers is available in four models from 0.55kW to 2.2kW with capacity from 55 L/min to 220 L/min',
        tableHeadings: ['S', 'CODE', 'PRODUCT', 'Chairs', 'c.f.m', 'L/min', 'Hp', 'kW', 'Bar', 'Psi', 'dB(A)'],
        tableRows: [
          [
            [''],
            ['F-FVDV504FNM294'],
            ['Med320-50V-ES-3M & Dryer'],
            ['4'],
            ['8.3'],
            ['235'],
            ['3'],
            ['2.2'],
            ['8'],
            ['116'],
            ['72']
          ]
        ]
      },
      {
        name: 'Dr Sonic Sound-Proofed',
        imageUrl: 'assets/products/oil-free/DrSONIC_dryer_gp.jpg',
        // tslint:disable-next-line: max-line-length
        description: 'The Fini Medicair range includes models to suit dental applications of all sizes from 1 chair to 8 chair surgeries. The Medicair range are also suitable for laboratory and clean air applications in a variety of sittuations. Each model features the proven and reliable Fini oil less compressor pump unit with automatic controls for ease of operation.The Medicair range is available in five models from 0.55kW to 4.4kW with capacity from 55 L/min to 440 L/min',
        tableHeadings: ['S', 'CODE', 'PRODUCT', 'Chairs', 'Receiver Size', 'L/min', 'm3/h', 'c.f.m', 'Bar', 'Psi', 'dB(A)'],
        tableRows: [
          [
            [''],
            ['F-FVDV504FNM297'],
            ['Dr.Sonic 320-50V-3M With Sound Proof Cover'],
            ['4'],
            ['50Lt'],
            ['235'],
            ['14'],
            ['8.2'],
            ['8'],
            ['116'],
            ['60']
          ],
        ]
      },
      {
        name: 'Dr Sonic With Dryer + Sound-Proofed',
        imageUrl: 'assets/products/oil-free/DrSONIC_dryer_gp.jpg',
        // tslint:disable-next-line: max-line-length
        description: 'The Fini Medicair range includes models to suit dental applications of all sizes from 1 chair to 8 chair surgeries. The Medicair range are also suitable for laboratory and clean air applications in a variety of sittuations. Each model features the proven and reliable Fini oil less compressor pump unit with automatic controls for ease of operation.The Medicair range is available in five models from 0.55kW to 4.4kW with capacity from 55 L/min to 440 L/min',
        tableHeadings: ['S', 'CODE', 'PRODUCT', 'Chairs', 'Receiver Size', 'L/min', 'm3/h', 'c.f.m', 'Bar', 'Psi', 'dB(A)'],
        tableRows: [
          [
            [''],
            ['F-FVDV504FNM459'],
            ['Dr.Sonic 320-50V-ES-3M & Dryer With Sound Proof Cover'],
            ['3-4'],
            ['50Lt'],
            ['235'],
            ['14'],
            ['8.2'],
            ['8'],
            ['116'],
            ['60']
          ],
          [
            [''],
            ['F-FVGN541FMD029'],
            ['Dr.Sonic 640-90F-ES-6T & Dryer With Sound Proof Cover'],
            ['6-9	'],
            ['90Lt'],
            ['470'],
            ['28.2'],
            ['16.6'],
            ['8'],
            ['116'],
            ['64']
          ],
        ]
      }
    ]
  }

];
