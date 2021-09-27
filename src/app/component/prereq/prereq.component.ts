import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prereq',
  templateUrl: './prereq.component.html',
  styleUrls: ['./prereq.component.scss']
})
export class PrereqComponent implements OnInit {

  constructor() { }

  cardTitle = "Metasploit Prerequisites" ;
  cardSubtitle = "The following is required for this tutorial" ;

  vmWare = "VMware Workstation Player" ;
  vmWareLink = "sdasd";

  metasploit = "metasploit" ;
  metasploitLink = "" ;

  metasploitTable = "Metasploit Table" ;
  metasploitTableLink = "" ;

  ngOnInit(): void {
  }

}
