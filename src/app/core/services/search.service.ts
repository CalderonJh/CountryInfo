import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from '../interfaces/search-item';
import { Country } from '../interfaces/country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  private baseURL: string = 'https://restcountries.com/v3.1';
  private _countries: Country[] = [];

  private _searchboxObservable: BehaviorSubject<SearchItem> =
    new BehaviorSubject<SearchItem>({ value: 'default' });

  searchByCapital(value: string) {
    return this.http
      .get<Country[]>(`${this.baseURL}/capital/${value}`)
      .subscribe((res) => {
        console.log(res);
        this._searchboxObservable.next({ value, res });
      });
  }

  get countries(): Country[] {
    return this._countries;
  }

  get searchboxObservable() {
    return this._searchboxObservable.asObservable();
  }
}
