import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supply-and-installation',
  templateUrl: './supply-and-installation.component.html',
  styleUrls: ['./supply-and-installation.component.scss']
})
export class SupplyAndInstallationComponent implements OnInit {
  paragraphs=[`Since The Titan Emporium (Pty) Ltd was established in 2012, there isn&#39;t much we have not come
  across in the supply and installation of compressed air systems.`,`We believe that you must start with the right parts and products and that&#39;s why we only supply
  market leading brands.`,`We can supply products including :–`,`Compressors (rotary vane and rotary screw)`,
  `Parts for pneumatic control systems`,
  `Downstream equipment`,
  `Compressed air piping systems`,
  `Spares and consumables`,`We can also install parts and full systems with minimal downtime or disruption to your business.`
];
  heading ="Supply &amp; Installation"
  bg="";
  
  constructor() { }

  ngOnInit() {
  }

}
