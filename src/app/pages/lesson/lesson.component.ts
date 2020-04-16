import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsInterface } from '@interfaces/databaseInterface';
import { DatabaseService } from '@services/database.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LessonComponent implements OnInit {

  public lessonText: string;
  public lesson: LessonsInterface;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.lesson = this.databaseService.getAllData().lessons.find(e => e.number === Number(this.route.snapshot.paramMap.get('id')));
      this.lessonText = this.lesson.text;
    });
    this.route.queryParamMap.subscribe(queryParams => {
      if (queryParams.get('search')) {
        const search = queryParams.get('search');
        this.lessonText = this.databaseService.getAllData().lessons.find(e => e.number === Number(this.route.snapshot.paramMap.get('id'))).text.replace(new RegExp(search, 'gi'), `<span class='highlight'>${search}</span>`);
      }
    });
  }

}
