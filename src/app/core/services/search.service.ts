import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from '../interfaces/search-item';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private _searchboxObservable: BehaviorSubject<SearchItem> =
    new BehaviorSubject<SearchItem>({ value: 'default' });

  get searchboxObservable() {
    return this._searchboxObservable.asObservable();
  }

  set searchObservableValue(data: SearchItem) {
    this._searchboxObservable.next(data);
  }

  constructor() {}
}
