import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrereqComponent } from './component/prereq/prereq.component';
import { ScenOneComponent } from './component/scen-one/scen-one.component';
import { ScenTwoComponent } from './component/scen-two/scen-two.component';
import { HomeComponent } from './component/home/home.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    PrereqComponent,
    ScenOneComponent,
    ScenTwoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
