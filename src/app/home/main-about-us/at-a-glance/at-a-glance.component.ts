import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-at-a-glance",
  templateUrl: "./at-a-glance.component.html",
  styleUrls: ["./at-a-glance.component.scss"]
})
export class AtAGlanceComponent implements OnInit {
  paragraphs = [
    `
The Titan Emporium is a distributor of leading global brands with head offices in Johannesburg 
(South Africa) providing integrated product solutions, rental, long term leasing, and product support. 
The company was established in 2012 in South Africa, A unique entrepreneurial 100% black-owned and 
black-controlled industrial supplies, solutions and Investment Company.
`,
    `The core products comprise of Equipment (Industrial compressors, accessories and leasing), 
    Automotive (Car batteries, alternators and starters), and pneumatics (tube fittings, push 
      fittings, pneumatic cylinders, mechanical valves, and air source treatment) Valves, safety
       valves, control valves, mining valves, pneumatic valves, water valves and butterfly valves. `

       ,
       `We offer flexible, value adding, integrated business solutions to our customers backed by leading global brands.
       The Titan Emporium has a proven track record of long-term relationships with global principals and customers. We have an ability working and supplying in challenging territories across multiple product disciplines.
       `
  ];

  heading = `The Titan Emporium at a Glance`;
  constructor() {}

  ngOnInit() {}
}
