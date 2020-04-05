import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public inputSearch: string;
  constructor() { }

  ngOnInit() {}

  search() {
    console.log('%c this.inputSearch', 'background: #df03fc; color: #f8fc03', this.inputSearch);
  }

}
