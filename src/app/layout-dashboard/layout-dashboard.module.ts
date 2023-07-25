import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutDashboardRoutingModule } from './layout-dashboard-routing.module';
import { LayoutDashboardComponent } from './components/layout-dashboard/layout-dashboard.component';


@NgModule({
  declarations: [
    LayoutDashboardComponent
  ],
  imports: [
    CommonModule,
    LayoutDashboardRoutingModule
  ]
})
export class LayoutDashboardModule { }
