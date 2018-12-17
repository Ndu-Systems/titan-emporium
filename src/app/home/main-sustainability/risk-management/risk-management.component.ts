import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risk-management',
  templateUrl: './risk-management.component.html',
  styleUrls: ['./risk-management.component.scss']
})
export class RiskManagementComponent implements OnInit {
  heading =`Risk Management`

  paragraphs = [`The Titan Emporium (Pty) Ltd understands that risk management is an essential
  element of good business governance and an integral part of sound management
  practice. Risk is inherent in all business activities, and the objective of our risk
  management processes is not to eliminate risk, but to provide the structural means to
  identify, prioritise and manage this risk. By embedding risk management in company
  business processes in an explicit, practical way, a formal means for managing the
  risks associated with our operating environment is created.`]
  constructor() { }

  ngOnInit() {
  }

}
