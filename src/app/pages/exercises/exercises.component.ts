import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '@services/database.service';
import { LessonsInterface } from '@interfaces/databaseInterface';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss', '../home/home.component.scss'],
})
export class ExercisesComponent implements OnInit {

  private lessonPassed: number[];
  public lessons: LessonsInterface[];

  constructor(
    private databaseService: DatabaseService
  ) { }

  ngOnInit() {
    this.lessonPassed = localStorage.getItem('lessonPassed') ? JSON.parse(localStorage.getItem('lessonPassed')) : [];
    this.lessons = this.databaseService.getAllData().lessons;
  }

  completeClass(e: number): string {
    let result = '';
    if (this.lessonPassed.includes(e)) {
      result = 'passed';
    }
    return result;
  }

}
