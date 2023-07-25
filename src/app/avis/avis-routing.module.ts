import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisComponent } from './components/avis/avis.component';

const routes: Routes = [{
  path: "",
  component: AvisComponent

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvisRoutingModule { }
