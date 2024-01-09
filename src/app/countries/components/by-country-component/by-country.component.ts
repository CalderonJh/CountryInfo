import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchItem } from '../../../core/interfaces/search-item';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country.component.html',
  styles: ``,
})
export class ByCountryComponent {
  public data$: Observable<SearchItem>;
  constructor(searchService: SearchService) {
    this.data$ = searchService.searchboxObservable;
  }
}
