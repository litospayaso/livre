import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '@services/database.service';
import { LessonsInterface } from '@interfaces/databaseInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  private lessons: LessonsInterface[];

  constructor(
    private databaseService: DatabaseService
  ) { }

  ngOnInit() {
    this.lessons = this.databaseService.getAllData().lessons;
  }

}
