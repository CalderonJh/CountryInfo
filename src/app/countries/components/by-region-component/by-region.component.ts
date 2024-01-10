import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchItem } from '../../../core/interfaces/search-item';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'countries-by-region',
  templateUrl: './by-region.component.html',
  styles: ``,
})
export class ByRegionComponent {
  public data$: Observable<SearchItem>;
  constructor(searchService: SearchService) {
    this.data$ = searchService.searchboxObservable;
  }
}
