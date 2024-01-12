import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { SearchItem } from '../../../core/interfaces/search-item';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'countries-by-code',
  templateUrl: './by-code.component.html',
  styles: '',
})
export class ByCodeComponent implements OnInit {
  public data$: Observable<SearchItem>;
  private value = '';
  constructor(private searchService: SearchService) {
    this.data$ = searchService.searchboxObservable;
  }

  ngOnInit() {
    this.data$.subscribe((searchItem)=>{
      this.value = searchItem['value'];
    })

    if (this.value) this.searchService.search('alpha', this.value)
  }
}
