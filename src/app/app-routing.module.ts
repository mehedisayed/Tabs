import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Tab1Component} from './tab1/tab1.component';
import {Tab2Component} from './tab2/tab2.component';
import {Tab3Component} from './tab3/tab3.component';
import {TabsComponent} from './tabs/tabs.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'tabs', component: TabsComponent},
  {path: 'tab1', component: Tab1Component},
  {path: 'tab2', component: Tab2Component},
  {path: 'tab3', component: Tab3Component},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
