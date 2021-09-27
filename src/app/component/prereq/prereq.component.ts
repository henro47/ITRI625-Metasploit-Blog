import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prereq',
  templateUrl: './prereq.component.html',
  styleUrls: ['./prereq.component.scss']
})
export class PrereqComponent implements OnInit {

  constructor() { }

  //Prereq card content
  cardPreTitle = "Metasploit Prerequisites" ;
  cardPreSubtitle = "The following is required for this tutorial" ;

  vmWare = "VMware Workstation Player" ;
  vmDescription = "VMware Player is a free desktop application that " +
                  "lets you run a virtual machine on a Windows or Linux PC. " +
                  "VMware Player provides an intuitive user interface for running " +
                  "preconfigured virtual machines created with VMware Workstation, GSX Server, and ESX Server." ;
  vmWareLink = "https://www.vmware.com/products/workstation-player.html";

  kali = "Kali Linux (Metasploit)" ;
  kaliDescription = "Kali Linux is a Debian-derived Linux distribution designed for digital " +
                    "forensics and penetration testing. It is maintained and funded by Offensive Security." ;
  kaliLink = "https://www.kali.org/" ;

  metasploitTable = "Metasploit Table 2" ;
  metasploitTableDescription = "A test environment provides a secure place to perform penetration " +
                                "testing and security research. For your test environment, you need a " +
                                "Metasploit instance that can access a vulnerable target. The following sections "
                                +"describe the requirements and instructions for setting up a vulnerable target." ; 
  metasploitTableLink = "https://docs.rapid7.com/metasploit/metasploitable-2/" ;

  //Walkthrough card content
  accTitle = "Software installion instructions" ;

  ngOnInit(): void {
  }

}
