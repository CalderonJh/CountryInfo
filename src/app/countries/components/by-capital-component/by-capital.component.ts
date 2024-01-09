import { Component } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';
import { Observable } from 'rxjs';
import { SearchItem } from '../../../core/interfaces/search-item';
import { Country } from '../../../core/interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital.component.html',
  styles: ``,
})
export class ByCapitalComponent {
  public data$: Observable<SearchItem>;

  constructor(searchService: SearchService) {
    this.data$ = searchService.searchboxObservable;
  }
}
