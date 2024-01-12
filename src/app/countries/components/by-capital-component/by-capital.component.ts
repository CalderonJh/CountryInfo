import {Component, OnDestroy, OnInit} from '@angular/core';
import { SearchService } from '../../../core/services/search.service';
import { Observable } from 'rxjs';
import { SearchItem } from '../../../core/interfaces/search-item';

@Component({
  selector: 'countries-by-capital',
  templateUrl: './by-capital.component.html',
  styles: ``,
})
export class ByCapitalComponent implements OnInit, OnDestroy {
  public data$: Observable<SearchItem>;

  private value: string = '';

  constructor(private searchService: SearchService) {
    this.data$ = searchService.searchboxObservable;
  }

  ngOnInit() {
    this.searchService.searchboxObservable.subscribe((v) => {
      this.value = v['value'];
    });
  }

  ngOnDestroy() {
    this.searchService.setSearcboxObservable = { value: this.value };
    console.log('saved', this.value)
  }
}
