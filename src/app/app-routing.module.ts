import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: "dashboard",
    loadChildren: () => import('./layout-dashboard/layout-dashboard.module').then(m => m.LayoutDashboardModule),
  },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: "",
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),

  },
  {
    path: "**",
    redirectTo: "/",
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
