import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { GetVilleResolver } from '../shared/resolvers/get-ville.resolver';

const routes: Routes = [
  {
    path: "", component: AuthLayoutComponent,
    children: [
      { path: "", component: LoginComponent },
      { path: "register", component: RegisterComponent, resolve: { ville: GetVilleResolver } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
