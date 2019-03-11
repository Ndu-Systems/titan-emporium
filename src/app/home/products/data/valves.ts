import { Valve } from "./../models/valve.model.";

export const valves: Array<Valve> = [

  //SOFT SEAT SAFETY VALVES
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
     
  },
  {
    id: "seat-safety-valves",
    imageUrl: "253.jpg",
    imageName:"SRV 530 3/4″ NPT / BSPT",
    tableHeadings: [
      "Pressure Setting (PSI)	",
      "Flow (SCFM)	"
    ],
    tableRows: [
    
      ["20","143"  ],
      ["50","233"  ],
      ["100","417"  ],
      ["150","601"  ],
      ["200","786"  ],
      ["250","970"  ],
    ],
     
  },
  {
    id: "seat-safety-valves",
    imageUrl: "254.jpg",
    imageName:"SRV 765 1″ NPT / BSPT",
    tableHeadings: [
      "Pressure Setting (PSI)	",
      "Flow (SCFM)	"
    ],
    tableRows: [
    
      ["20","304"  ],
      ["50","497"  ],
      ["100","889"  ],
      ["150","1281"  ],
      ["200","1674"  ],
      ["250","2066"  ],
    ],
     
  },

  
  //SOFT SEAT SAFETY VALVES - tank-check-valves
  {
    id: "tank-check-valves",
    name: "IN TANK CHECK VALVES",
    imageUrl: "ct1.jpg",
    imageName:"Model CTA",
    details: [
      
`In-tank check valves screw directly into the receiver and are attached to the compressor’s discharge line at their inlet.`,

`The CTA and CTB valves have a female inlet and a male outlet.
 The only difference between a CTA and a CTB is the CTB has an
  1/8″ port on the side. Inlets range from 1/4″ to 1-1/2″. Outlets range from 1/2″ to 1-1/2″ (NPT).`,

`The CTC and CTD valves have a male (compression fitting) inlet and a male outlet.
 The difference between the CTC and the CTD is the CTD has an 1/8″ port on the side.
  Inlets range from 3/8″ to 3/4″ male (compression fitting). Outlets range from 3/8″ to 1″ male (NPT).`
    ],

    tableHeadings: [
      "Connection Inlet",
      "Connection Outlet",
      "Model #",
      "SCFM"
    ],
    tableRows: [
      ["1/4","1/2","CTA1412",20  ],
  ["3/8","1/2","CTA3812","20"  ],
  ["1/2","1/2","CTA1212","20"  ],
  ["1/2","3/4","CTA1234","30"  ],
  ["1/2","1","CTA121","60"  ],
  ["3/4","3/4","CTA3434","30"  ],
  ["3/4","1","CTA341","60"  ],
  ["3/4","1-1/2","CTA34112","95"  ],
  ["1","1","CTA11","60"  ],
  ["1","1-1/4","CTA1114","95"  ],
  ["1-1/4","1-1/4","CTA114114","95"  ],
  ["1-1/2","1-1/2","CTA112112","95"  ]
    ],
     
  },
  {
    id: "tank-check-valves",
    name: "IN TANK CHECK VALVES",
    imageUrl: "ct2.jpg",
    imageName:"Model CTB",

    tableHeadings: [
      "Connection Inlet",
      "Connection Outlet",
      "Model #",
      "SCFM"
    ],
    tableRows: [
      ["1/4","1/2","CTB1412",20  ],
      ["3/8","1/2","CTB3812","20"  ],
      ["1/2","1/2","CTB1212","20"  ],
      ["1/2","3/4","CTB1234","30"  ],
      ["1/2","1","CTB121","60"  ],
      ["3/4","3/4","CTB3434","30"  ],
      ["3/4","1","CTA341","60"  ],
      ["3/4","1-1/2","CTB34112","95"  ],
      ["1","1","CTB11","60"  ],
      ["1","1-1/4","CTB1114","95"  ],
      ["1-1/4","1-1/4","CTB114114","95"  ],
      ["1-1/2","1-1/2","CTB112112","95"  ]
    ],
    
  },
  {
    id: "tank-check-valves",
    name: "IN TANK CHECK VALVES",
    imageUrl: "ctc3.gif",
    imageName:"Model CTC",

    tableHeadings: [
      "Connection Inlet",
      "Connection Outlet",
      "Model #",
      "SCFM"
    ],
    tableRows: [
      ["*3/8","3/8","CTC3838",12  ],
      ["5/16","1/2","CTC51612","20"  ],
      ["3/8","1/2","CTC3812","20"  ],
      ["1/2","1/2","CTC1212","20"  ],
      ["1/2","3/4","CTC1234","30"  ],
      ["3/4","3/4","CTC3412","20"  ],
      ["3/4","3/4","CTC3434","30"  ],
      ["3/4","1","CTC341","60"  ],
    ],
    
  },
  {
    id: "tank-check-valves",
    name: "IN TANK CHECK VALVES",
    imageUrl: "ct4.jpg",
    imageName:"Model CTD",

    tableHeadings: [
      "Connection Inlet",
      "Connection Outlet",
      "Model #",
      "SCFM"
    ],
    tableRows: [
      ["*3/8","3/8","CTD3838",12  ],
  ["5/16","1/2","CTD51612","20"  ],
  ["3/8","1/2","CTD3812","20"  ],
  ["1/2","1/2","CTD1212","20"  ],
  ["1/2","3/4","CTD1234","30"  ],
  ["3/4","1/2","CTD3412","20"  ],
  ["3/4","3/4","CTD3434","30"  ],
  ["3/4","1","CTD341","60"  ],
    ],
    
  },
  {
    id: "tank-check-valves",
    name: "IN TANK CHECK VALVES",
    imageUrl: "ct5.jpg",
    imageName:"Model CTF",

    tableHeadings: [
      "Connection Inlet",
      "Connection Outlet",
      "Model #",
      "SCFM"
    ],
    tableRows: [
      ["1/2","1/2","CTF1212",20  ],
      ["5/8","1/2","CTF5812","20"  ],
      ["5/8","3/4","CTF5834","30"  ],
      ["3/4","3/4","CTF3434","30"  ]
    ],
    
  },
  {
    id: "tank-check-valves",
    name: "IN TANK CHECK VALVES",
    imageUrl: "ct6.jpg",
    imageName:"Model CTG",

    tableHeadings: [
      "Connection Inlet",
      "Connection Outlet",
      "Model #",
      "SCFM"
    ],
    tableRows: [
      ["1/2","1/2","CTG1212",20  ],
      ["5/8","3/4","CTG5812-12*","20"  ],
      ["5/8","3/4","CTG5834","30"  ],
      ["3/4","3/4","CTG3434","30"  ],
      ["*True 1/2″ check valve","","",""  ]
    ],
    
  },
  {
    id: "tank-check-valves",
    name: "IN TANK CHECK VALVES",
    imageUrl: "ct7.jpg",
    imageName:"Model CAC",

    tableHeadings: [
      "Connection Inlet",
      "Connection Outlet",
      "Model #",
      "SCFM"
    ],
    tableRows: [
      ["3/8","1/2","CAC3812",20  ],
      ["1/2","1/2","CAC1212","20"  ]
    ],
    
  },
  {
    id: "tank-check-valves",
    name: "IN TANK CHECK VALVES",
    imageUrl: "ct8.jpg",

    tableHeadings: [
      "Options"
    ],
    tableRows: [
      ['	The SU3 start unloader is used to ease compressor start-up in cold weather and lowered volvtage applications.'],
    ],
    
  },
  {
    id: "tank-check-valves",
    name: "IN TANK CHECK VALVES",
    imageUrl: "ct9.gif",

    tableHeadings: [
    
    ],
    tableRows: [
      ['Super Seal is a pre-applied pipe sealant'],
    ],
    tableAbbrevations:'A p1 (1/8″ port) and p2 (1/4″ port) are additional ports available on the CTB and CTD. These are also available on the CLB (In-Line check valve).'
    
  },
  //IN LINE CHECK VALVES
  {
    id: "line-check-valves",
    name: "IN LINE CHECK VALVES",
    imageUrl: "l1.jpg",
    imageName:"Model CLA",
    details: [
`      In-line check valves screw directly into the discharge line and have 
the same size inlet as they do outlet. They have female inlets and outlets and range in size from 1/4″ to 1-1/2″.
`,
`      In-line check valves screw directly into the discharge 
line and have the same size inlet as they do outlet. They have female inlets and outlets and range in size from 1/4″ to 1-1/2″.
`    ],

    tableHeadings: [
      "Connection Inlet",
      "Connection Outlet",
      "Model #",
      "SCFM"
    ],
    tableRows: [
      ["1/4","1/4","CLA14",10  ],
      ["3/8","3/8","CLA38","12",  ],
      ["1/2","1/2","CLA12","20",  ],
      ["3/4","3/4","CLA34","30",  ],
      ["1","1","CLA1","60",  ],
      ["1-1/2","1-1/2","CLA112","60",  ]
    ],
     
  },
  {
    id: "line-check-valves",
    name: "IN LINE CHECK VALVES",
    imageUrl: "l2.jpg",
    imageName:"Model CLB",
    tableHeadings: [
      "Connection Inlet",
      "Connection Outlet",
      "Model #",
      "SCFM"
    ],
    tableRows: [
      ["1/4","1/4","CLB14",10  ],
  ["3/8","3/8","CLB38","12"  ],
  ["1/2","1/2","CLB12","20"  ],
  ["3/4","3/4","CLB34","30"  ],
  ["1","1","CLB1","60"  ],
  ["1-1/2","1-1/2","CLB112","60"  ]
    ],
     
  },
  {
    id: "line-check-valves",
    name: "IN LINE CHECK VALVES",
    imageUrl: "l3.jpg",
    imageName:"Model CLC-14",
    tableHeadings: [
      "Connection Inlet",
      "Connection Outlet",
      "Model #",
      "SCFM"
    ],
    tableRows: [
      ["1/4","1/4","CLC14",2.5  ]

    ],
     
  },


];
