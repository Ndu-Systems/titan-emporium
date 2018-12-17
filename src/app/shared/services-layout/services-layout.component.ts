import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services-layout',
  templateUrl: './services-layout.component.html',
  styleUrls: ['./services-layout.component.scss']
})
export class ServicesLayoutComponent implements OnInit {

  @Input() paragraphs:Array<string>;
  @Input() heading;
  @Input() bg ;
    bgImage: string;
    constructor() { }
    ngOnInit() { 
      if(!this.bg){
        // this.bg = "banner_bg.jpg";
        this.bg = "image-cilrce.svg";
      }
      this.bgImage =`../../../assets/pages-images/${this.bg}`;
  
    }
  

}
