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

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      // tslint:disable-next-line: max-line-length
      this.lessonText = this.databaseService.getAllData().lessons.find(e => e.number === Number(this.route.snapshot.paramMap.get('id'))).text;
    });
    this.route.queryParamMap.subscribe(queryParams => {
      if (queryParams.get('search')) {
        const search = queryParams.get('search');
        // tslint:disable-next-line: max-line-length
        this.lessonText = this.databaseService.getAllData().lessons.find(e => e.number === Number(this.route.snapshot.paramMap.get('id'))).text.replace(new RegExp(search, 'gi'),`<span class='highlight'>${search}</span>`);
      }
    });
  }

}
