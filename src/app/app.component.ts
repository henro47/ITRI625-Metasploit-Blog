import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',]
})
export class AppComponent {
  title = 'ITRI625-Metasploit-Blog';
  navTitle = 'Metasploit' ;
  navHome = 'Home' ;
  navPreReq = '1. Prerequisites' ;
  navScenOne = '2. Backdoor Exploit' ;
  navScenTwo = '3. PHP Port 80 Exploit' ;

}
