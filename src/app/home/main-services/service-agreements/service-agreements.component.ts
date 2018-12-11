import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-agreements',
  templateUrl: './service-agreements.component.html',
  styleUrls: ['./service-agreements.component.scss']
})
export class ServiceAgreementsComponent implements OnInit {
  paragraphs=[`The Titan Emporium offer our customers a range of service agreements and routine maintenance.
  Typical compressors require servicing twice a year but this can increase depending on the hours
  run every year.`,`Our aim with all servicing options is to take away the need for you to worry about your
  compressors servicing or maintenance. Our systems record all details of your compressors, we
  then remind you when they are due for a service or maintenance. In addition our systems track
  the work that has been done on your compressors, over the years, so we can highlight any
  upcoming maintenance requirements or special maintenance needed to maintain your
  manufacturer warranty.`
];
  heading ="Air Compressor Service Agreements"
  bg="";
  constructor() { }

  ngOnInit() {
  }

}
