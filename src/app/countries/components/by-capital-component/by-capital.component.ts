import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';
import { Observable } from 'rxjs';
import { SearchItem } from '../../../core/interfaces/search-item';

@Component({
  selector: 'countries-by-capital',
  templateUrl: './by-capital.component.html',
  styles: ``,
})
export class ByCapitalComponent implements OnInit {
  public data$: Observable<SearchItem>;

  private value: string = '';

  constructor(private searchService: SearchService) {
    this.data$ = searchService.searchboxObservable;
  }

  ngOnInit() {
    this.searchService.searchboxObservable.subscribe((v) => {
      this.value = v['value'];
    });
    if (this.value) this.searchService.search('capital', this.value);
  }
}
