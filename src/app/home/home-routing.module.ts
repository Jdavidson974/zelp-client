import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GetAllRestoResolver } from './resolvers/get-all-resto.resolver';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    resolve: { restaurant: GetAllRestoResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
