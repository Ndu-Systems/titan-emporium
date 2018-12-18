import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-pharmaceutical-and-dental',
  templateUrl: './medical-pharmaceutical-and-dental.component.html',
  styleUrls: ['./medical-pharmaceutical-and-dental.component.scss']
})
export class MedicalPharmaceuticalAndDentalComponent implements OnInit {
  bg="";
  list=[];
  paragraphs;
  heading;
  constructor() { }

  ngOnInit() {
  }

}
