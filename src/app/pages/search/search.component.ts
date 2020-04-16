import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '@services/database.service';
import { LessonsInterface } from '@interfaces/databaseInterface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss', '../home/home.component.scss'],
})
export class SearchComponent implements OnInit {

  public rawLessons: LessonsInterface[];
  public lessons: LessonsInterface[];
  public inputSearch: string;
  constructor(
    private databaseService: DatabaseService
  ) { }

  ngOnInit() {
    this.rawLessons = this.databaseService.getAllData().lessons;
  }

  search() {
    if (this.inputSearch !== '') {
      this.lessons = this.rawLessons.filter(e => e.title.toLowerCase().includes(this.inputSearch.toLowerCase()) || e.text.toLowerCase().includes(this.inputSearch.toLowerCase()));
    } else {
      this.lessons = [];
    }
  }

}
