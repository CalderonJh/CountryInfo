import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchItem } from '../../../core/interfaces/search-item';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-name.component.html',
  styles: ``,
})
export class ByNameComponent implements OnInit {
  public data$: Observable<SearchItem>;
  constructor(private searchService: SearchService) {
    this.data$ = searchService.searchboxObservable;
  }

  ngOnInit(): void {
    this.data$ = this.searchService.searchboxObservable;
  }
}
