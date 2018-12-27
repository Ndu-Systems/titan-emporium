import { TextModel } from './../../models/body.text.model';
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
  @Input() list ;
  @Input() multiList:Array<TextModel> =[];
  @Input() showLink ;
    bgImage: string;
    constructor() { }
    ngOnInit() { 
      if(!this.bg){
        // this.bg = "banner_bg.jpg";
        this.bg = "image-cilrce.png";
      }
      this.bgImage =`../../../assets/pages-images/${this.bg}`;
  
    }
  

}
