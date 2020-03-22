import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsInterface } from '@interfaces/databaseInterface';
import { DatabaseService } from '@services/database.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent implements OnInit {

  private lesson: LessonsInterface;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.lesson = this.databaseService.getAllData().lessons.find(e => e.number === Number(this.route.snapshot.paramMap.get('id')));
    });
  }

}
