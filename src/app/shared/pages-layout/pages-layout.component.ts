import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pages-layout',
  templateUrl: './pages-layout.component.html',
  styleUrls: ['./pages-layout.component.scss']
})
export class PagesLayoutComponent implements OnInit {
@Input() paragraphs:Array<string>;
@Input() heading;
  constructor() { }
  ngOnInit() {  
  }

}
