import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component' ;
import {PrereqComponent} from './component/prereq/prereq.component';
import { ScenOneComponent } from './component/scen-one/scen-one.component';
import { ScenTwoComponent } from './component/scen-two/scen-two.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'prereq', component: PrereqComponent},
  {path:'scen-one', component: ScenOneComponent},
  {path:'scen-two', component: ScenTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

