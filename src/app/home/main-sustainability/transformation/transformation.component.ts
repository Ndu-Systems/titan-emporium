import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements OnInit {
  heading =`Transformation`;

  paragraphs = [`The Titan Emporium recognises the importance of Broad-based Black Economic
  Empowerment and fully support the principles of transformation.`,
  `Our Transformation Plans are progressive with a geared management focus on
  improving the numerical goals and targets for under- represented demographics,
  Our aim is to develop an effective leadership and empower people so that they will
  continue to have the perspective, energy and related skills to build and strengthen
  relationships with our customers and our other stakeholders.
  The Group currently has a level 1 BEE Contributor`]
  bg="";
  list=[];

  constructor() { }

  ngOnInit() {
  }

}
