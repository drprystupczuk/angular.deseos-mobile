import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from 'src/app/components/listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [ListasComponent],
  exports: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
