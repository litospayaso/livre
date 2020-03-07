import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeComponent } from './home/home.component';
import { DiccionarioComponent } from './diccionario/diccionario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    HomeComponent,
    DiccionarioComponent
  ]
})
export class PagesModule {}
