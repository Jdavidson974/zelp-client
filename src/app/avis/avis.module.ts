import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvisRoutingModule } from './avis-routing.module';
import { AvisComponent } from './components/avis/avis.component';


@NgModule({
  declarations: [
    AvisComponent
  ],
  imports: [
    CommonModule,
    AvisRoutingModule
  ]
})
export class AvisModule { }
