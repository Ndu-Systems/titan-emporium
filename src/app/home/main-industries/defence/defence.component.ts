import { Component, OnInit } from '@angular/core';
import { TextModel } from '../../../models/body.text.model';

@Component({
  selector: 'app-defence',
  templateUrl: './defence.component.html',
  styleUrls: ['./defence.component.scss']
})
export class DefenceComponent implements OnInit {
  bg="defence.png";
  list=[];
  paragraphs=[`Our military/defence air compressors are manufactured to ensure reliability in the most demanding of conditions, guaranteeing that you can rely on your machine, whatever environment it’s operating in. When the time for routine maintenance comes, the Reavell design allows easy access for maintenance, ensuring downtime is kept to an absolute minimum.`];
  heading="Defence";
  multiList:Array<TextModel> = []
  constructor() { }

  ngOnInit() {
  }

}
