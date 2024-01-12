import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchItem } from '../../../core/interfaces/search-item';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'countries-by-country',
  templateUrl: './by-name.component.html',
  styles: ``,
})
export class ByNameComponent implements OnInit {
  public data$: Observable<SearchItem>;

  private value: string = '';

  constructor(private searchService: SearchService) {
    this.data$ = searchService.searchboxObservable;
  }

  ngOnInit() {
    this.searchService.searchboxObservable.subscribe((searchItem) => {
      this.value = searchItem['value'];
    });
    if (this.value) this.searchService.search('name', this.value);
  }
}
