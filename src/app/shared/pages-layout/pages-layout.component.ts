import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pages-layout',
  templateUrl: './pages-layout.component.html',
  styleUrls: ['./pages-layout.component.scss']
})
export class PagesLayoutComponent implements OnInit {
@Input() paragraphs:Array<string>;
@Input() heading;
@Input() bg ;
  bgImage: string;
  constructor() { }
  ngOnInit() { 
    if(!this.bg){
      this.bg = "banner_bg.jpg";
    }
    this.bgImage =`../../../assets/pages-images/${this.bg}`;

  }

}
