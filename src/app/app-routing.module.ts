import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),

  },
  {
    path: "dashboard",
    loadChildren: () => import('./layout-dashboard/layout-dashboard.module').then(m => m.LayoutDashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
