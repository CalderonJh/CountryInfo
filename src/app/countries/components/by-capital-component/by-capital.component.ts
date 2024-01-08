import { Component } from '@angular/core';
import { SearchService } from '../../../shared/services/search.service';
import { SharingService } from '../../../core/services/sharing.service';
import { Observable } from 'rxjs';
import { SearchItem } from '../../../core/interfaces/search-item';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital.component.html',
  styles: ``
})
export class ByCapitalComponent {
  public data$: Observable<SearchItem>;
  constructor(sharingService:SharingService ){
    this.data$ = sharingService.searchboxObservable;
  }

}
