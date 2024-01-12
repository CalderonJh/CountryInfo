import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchItem } from '../../../core/interfaces/search-item';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'countries-by-country',
  templateUrl: './by-name.component.html',
  styles: ``,
})
export class ByNameComponent {
  public data$: Observable<SearchItem>;
  constructor(searchService: SearchService) {
    this.data$ = searchService.searchboxObservable;
  }



}
