import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingComponent } from './components/loading/loading.component';
import { ModalComponent } from './components/modal/modal.component';
import { CardRestoComponent } from './components/card-resto/card-resto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SizingBoxDirective } from './directives/sizing-box.directive';



@NgModule({
  declarations: [
    LoadingComponent,
    ModalComponent,
    CardRestoComponent,
    SizingBoxDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    LoadingComponent,
    ModalComponent,
    CardRestoComponent,
    SizingBoxDirective
  ],
})
export class SharedModule { }
