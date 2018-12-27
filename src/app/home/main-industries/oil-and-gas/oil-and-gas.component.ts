import { Component, OnInit } from "@angular/core";
import { TextModel } from "../../../models/body.text.model";

@Component({
  selector: "app-oil-and-gas",
  templateUrl: "./oil-and-gas.component.html",
  styleUrls: ["./oil-and-gas.component.scss"]
})
export class OilAndGasComponent implements OnInit {
  bg = "oilandthegas.png";
  list = [];
  paragraphs = [
    `Several advancements in drill bits and rotary technologies were made, creating the systems we
see today, which can reach to great depths and provide much faster methods for extraction. One
technological advancement that has also contributed to the industry was the use of air and gas
compressor systems.`,

    `Within the past 10 years, oil fields would often flare petroleum gas, which was the result of
treating crude oil before it was transported in a pipeline. However, new regulations demanded
that 95 percent of petroleum gas must be processed, requiring it to be compressed. In order to do
so, compressors were needed at the oil fields. Commonly, reciprocating gas engine-driven
compressor systems were employed while being fueled with the transported gas.`,

    `In addition, compressors are often used in oil fields for gas re-injection for maintaining reservoir
pressures. By using a series of compressors, gas or, in some cases, air, can be used for re-
injection. Both centrifugal air compressors, which are often the initial compression sources, as
well as reciprocating compressor systems, are used to meet required pressures.`,

    `Because well flow and reservoir pressures slowly decrease over a period of time, compressors
are often used to maintain or increase gas flow into a pipeline system, as well. Depending on the
demand, or application, both centrifugal and reciprocating compressor systems can be useful.`
  ];
  heading = "Oil and gas";
  multiList: Array<TextModel> = [
    {
      heading: "Types of Air Compressors Used in the Oil and Gas Industry",
      paragraphs: [
        `A reciprocating air compressor system operates through a crankshaft-driven piston and cylinder,
which is used to compress the air. There are both single- and two-stage designs. In a single-stage,
a solitary reciprocating piston works by drawing air into the cylinder. In a single stroke, this
creates the compression, which is then sent to a storage tank.`,

        `Addition, two-stage reciprocating compressors include an additional step where a smaller piston
is used. This can produce an even higher pressure if needed for certain applications.`
      ]
    },
    {
      heading: "Centrifugal Compressor",
      paragraphs: [
        `
    Centrifugal compressors are different than reciprocating models, as they depend on the
    continuous flow of fluid through a rotor. Depending on the type, they may be a single-stage or
    multi-stage compressor, and are driven by large gas turbines. Unlike reciprocating compressors,
    centrifugal compressors are often reserved for the largest oil and gas operations and require
    thousands of horsepower.`
      ]
    },
    {
      heading: "Common Compressor Applications in the Oil and Gas",
      paragraphs: [
        `
    Industries
    Operations both large and small utilize compressed air systems for a variety of purposes in their
    operations. Everything from pneumatic tools to pipeline transportation can benefit from a
    compressor system. Take a look at some of the most common applications compressors are used
    for:`,
        ` *Petroleum Refining — By boosting the pressure of processed gas, a catalytic reaction used in
    the refining process will occur.`,

        ` *Petrochemical Synthesis — Petrochemicals such as methanol, ammonia, ethylene, ethylene
    glycol and urea often rely on a specific pressurization of air and gas in the manufacturing
    processes.`,

        ` *Pipeline transportation — Utilizing gas and compressed air is common in transporting gas
    through pipelines. Pressures need to be maintained, which requires some form of compressor
    system to work correctly.`,
        ` *Gas injection — Increasing gas pressures and injecting oil layers can help promote the recovery
    of crude oil.`,

        `In addition, air pressure is often used for the transportation of liquids, pressurization of tanks,
    cooling, molding of petroleum products like plastics, as well as the synthesis of various
    petrochemicals.`
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
