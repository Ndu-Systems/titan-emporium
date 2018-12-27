import { Component, OnInit } from "@angular/core";
import { TextModel } from "src/app/models/body.text.model";

@Component({
  selector: "app-natural-gas",
  templateUrl: "./natural-gas.component.html",
  styleUrls: ["./natural-gas.component.scss"]
})
export class NaturalGasComponent implements OnInit {
  heading = "Natural Gas Compression";
  paragraphs = [
    `The Titan Emporium range of natural gas compressors can provide a safe, reliable source of compressed air for equipment cleaning and other typical natural gas industry processes. We’ve can provide superior air and gas compressor products for a wide range of industries.`
  ];
  list = [];
  bg = "oil.png";
  multiList: Array<TextModel> = [
    {
      heading:
        "What Makes Our Range of Natural Gas Compressors the Best Solution?",
      paragraphs: [
        `We have a range of industrial gas compressor packages that will exceed your expectations in terms of dependability, simplified maintenance, reduced ownership costs and an assortment of flexible gas packaging options:`,
        `Dependability: Through quality engineering, rigorous manufacturing and adherence to ISO 9001 standards,
enabling the Titan to provide reliable reciprocating and rotary screw compressors.`,

        `Low Cost of Ownership: Wide array of sizes, in both reciprocating and rotary screw compressors, 
allow for a more precise fit to operating conditions and needs, resulting in less wasted energy 
and more throughput. our rotary screw compressors offers a high efficiency rotor profile to minimize 
horsepower usage and a bearing arrangement that maximizes reliability.`,

        `Expert Gas Packaging: Our quality packagers can provide, by sale or rental,
Our gas compressors to fit your needs and applications. Our partners have many
years of experience in fabricating gas compressor packages with all types of drivers,
lubrication systems, a wide selection of control systems and all other components necessary 
to outfit a first class compression package to locate an authorized Quincy gas packager.`
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
