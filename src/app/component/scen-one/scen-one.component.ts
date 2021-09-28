import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scen-one',
  templateUrl: './scen-one.component.html',
  styleUrls: ['./scen-one.component.scss']
})
export class ScenOneComponent implements OnInit {

  constructor() { }

  //Card content
  cardTitle = "Scenario: Metasploit backdoor exploit";
  cardSubtitle = "Background information about the exploit";

  //Accordions content
  accOneTitle = "Step 1";
  accTwoTitle = "Step 2";
  accThreeTitle = "Step 3";
  accFourTitle = "Step 4";
  accFiveTitle = "Step 5";
  accSixTitle = "Step 6";


  ngOnInit(): void {
  }

}
