import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '@services/database.service';
import { LessonsInterface } from '@interfaces/databaseInterface';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
})
export class ExercisesComponent implements OnInit {

  private lessons: LessonsInterface[];

  constructor(
    private databaseService: DatabaseService
  ) { }

  ngOnInit() {
    this.lessons = this.databaseService.getAllData().lessons;
  }

}
