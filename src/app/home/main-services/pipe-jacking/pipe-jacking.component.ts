import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-jacking',
  templateUrl: './pipe-jacking.component.html',
  styleUrls: ['./pipe-jacking.component.scss']
})
export class PipeJackingComponent implements OnInit {
  paragraphs=[`Pipe jacking or micro tunnelling is the act of installing large diameter pipelines across 
  obstacles by tunnelling beneath and installing concrete sleeves or culverts by jacking them or pushing them in place. `,`
   It is essentially used for installing culverts for canals or stormwater pipes or even for multi-product line sleeves.`
  ,`Titan Emporium has installed pipelines across major roadways by pipe jacking for major clients like DRD Gold.`
  ,`Our team are capable of handling any project no matter the size.`
  
];
  heading ="Pipe Jacking"
  bg="";
  
  constructor() { }

  ngOnInit() {
  }

}
