import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { SearchItem } from '../../../core/interfaces/search-item';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'countries-by-region',
  templateUrl: './by-region.component.html',
  styles: ``,
})
export class ByRegionComponent implements OnInit{
  public data$: Observable<SearchItem>;
  private value = '';

  constructor(private searchService: SearchService) {
    this.data$ = searchService.searchboxObservable;
  }

  ngOnInit() {
    this.searchService.searchboxObservable.subscribe((v) => {
      this.value = v['value'];
    });
    if (this.value) this.searchService.search('subregion', this.value)
  }
}
