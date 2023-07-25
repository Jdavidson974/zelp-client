import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDashboardComponent } from './components/layout-dashboard/layout-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutDashboardComponent,
    children: [
      {
        path: "mes-avis",
        loadChildren: () => import('../avis/avis.module').then(m => m.AvisModule),
      },
      {
        path: "mes-restaurant",
        loadChildren: () => import('../restaurant/restaurant.module').then(m => m.RestaurantModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutDashboardRoutingModule { }
