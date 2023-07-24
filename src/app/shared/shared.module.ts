import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingComponent } from './components/loading/loading.component';
import { ModalComponent } from './components/modal/modal.component';
import { CardRestoComponent } from './components/card-resto/card-resto.component';



@NgModule({
  declarations: [
    LoadingComponent,
    ModalComponent,
    CardRestoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    FontAwesomeModule,
    LoadingComponent,
    ModalComponent,
    CardRestoComponent],
})
export class SharedModule { }
