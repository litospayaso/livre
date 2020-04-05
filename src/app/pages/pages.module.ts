import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from '@pages/home/home.component';
import { DiccionarioComponent } from '@pages/diccionario/diccionario.component';
import { LessonComponent } from '@pages/lesson/lesson.component';
import { ExercisesComponent } from '@pages/exercises/exercises.component';
import { AboutComponent } from '@pages/about/about.component';
import { SearchComponent } from '@pages/search/search.component';
import { EvaluationComponent } from '@pages/evaluation/evaluation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
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
