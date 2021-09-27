import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  cardTitle = "ITRI 625 Metasploit Project Team Members" ;
  cardSubtitle = "School of Computer Sciences and Information Systems.";

  ngOnInit(): void {
  }

}
