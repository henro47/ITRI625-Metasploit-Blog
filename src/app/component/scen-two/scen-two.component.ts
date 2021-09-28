import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scen-two',
  templateUrl: './scen-two.component.html',
  styleUrls: ['./scen-two.component.scss']
})
export class ScenTwoComponent implements OnInit {

  constructor() { }
  //Card content
  cardTitle = "Scenario: Metasploit PHP Port 80 exploit";
  cardSubtitle = "Background information about the exploit";

  //Accordions content
  accOneTitle = "Step 1";
  accTwoTitle = "Step 2";
  accThreeTitle = "Step 3";
  accFourTitle = "Step 4";
  accFiveTitle = "Step 5";
  accSixTitle = "Step 6";
  accSevTitle = "Step 7";
  ngOnInit(): void {
  }

}
