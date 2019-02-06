import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compressor-repair-and-service',
  templateUrl: './compressor-repair-and-service.component.html',
  styleUrls: ['./compressor-repair-and-service.component.scss']
})
export class CompressorRepairAndServiceComponent implements OnInit {
  paragraphs=[`A part of our customer service efforts is to repair and service your air compressor as quickly and
  efficiently as possible. Our teams perform the most difficult of repairs quickly and to perfection,
  allowing you to receive quality compressed air continuously. Choosing The Titan Emporium for
  compressor repair and service gives you a quick, efficient and affordable service that will stand
  the test of time.`
];
  heading ="Air Compressor Repair & Services"
  bg="compressor-repair-and-service.png";
  constructor() { }

  ngOnInit() {
  }

}
