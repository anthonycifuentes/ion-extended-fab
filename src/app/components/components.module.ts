import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtendedFabComponent } from './extended-fab/extended-fab.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ExtendedFabComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ExtendedFabComponent]
})
export class ComponentsModule { }
