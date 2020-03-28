import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeComponent } from './home/home.component';
import { DiccionarioComponent } from './diccionario/diccionario.component';
import { LessonComponent } from './lesson/lesson.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { EvaluationComponent } from './evaluation/evaluation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    DiccionarioComponent,
    LessonComponent,
    AboutComponent,
    SearchComponent,
    EvaluationComponent,
    ExercisesComponent
  ]
})
export class PagesModule {}
