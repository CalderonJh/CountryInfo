import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from '../interfaces/search-item';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  private _searcboxObservable: BehaviorSubject<SearchItem> =
    new BehaviorSubject<SearchItem>({ value: 'default' });

  get searchboxObservable() {
    return this._searcboxObservable.asObservable();
  }

  set searchObservableValue(data: SearchItem) {
    this._searcboxObservable.next(data);
  }

  constructor() {}
}
