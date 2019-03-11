import { Valve } from "./../models/valve.model.";

export const valves: Array<Valve> = [
  {
    id: "seat-safety-valves",
    name: "SOFT SEAT SAFETY VALVES",
    imageUrl: "250.jpg",
    imageName:"SRV 187 1/8″ NPT / BSPT",
    details: [
      `The SRH-series of ASME approved hard seat safety valves are available in 
      pressure settings between 50-350 psi (5psi increments). Sizes range from 1/8″ to 1″ NPT or BSPT.`,
      `* To order, please specify NPT or BSPT size and
       pressure (ex. SRH250-150= 1/4″ safety valve set 150 psi).`
    ],

    tableHeadings: [
      "Pressure Setting (PSI)	",
      "Flow (SCFM)	"
    ],
    tableRows: [
      ["25","17"],
      ["50","28"],
      ["100","51"],
      ["150","73"],
      ["200","96"],
      ["250","118"],
    ],
     tableAbbrevations:
      "I=Standard Industrial   Volume=Piston Displacement   FAD=Free Air Delivered   OE=Original Equipment"
  },
  {
    id: "seat-safety-valves",
    imageUrl: "251.jpg",
    imageName:"SRV 250 1/4″ NPT / BSPT /BSPP",
    tableHeadings: [
      "Pressure Setting (PSI)	",
      "Flow (SCFM)	"
    ],
    tableRows: [
      ["25","31"  ],
      ["50","51"  ],
      ["100","92"  ],
      ["150","132"  ],
      ["200","173"  ],
      ["250","214"  ],
    ],
     
  }
];
