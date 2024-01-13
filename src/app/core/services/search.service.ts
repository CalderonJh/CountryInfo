import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { SearchItem } from '../interfaces/search-item';
import { CountryInterface } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(private http: HttpClient) {}

  private baseURL: string = 'https://restcountries.com/v3.1';

  private _searchboxObservable: BehaviorSubject<SearchItem> =
    new BehaviorSubject<SearchItem>({ value: '' });

  search(route: string, value: string) {
    // console.log(`endpoint: ${this.baseURL}/${route}/${value}`);
    if (!this.isValidSearch(value)){
      this._searchboxObservable.next({value:''})
      return;
      // throw `Search value is required`
    }
    return this.http
      .get<CountryInterface[]>(`${this.baseURL}/${route}/${value}`)
      .pipe(catchError(() => of([])))
      .subscribe((res) => this.handleSearchResult(route, value, res));
  }

  get searchboxObservable() {
    return this._searchboxObservable.asObservable();
  }

  handleSearchResult(route: string, value: string, res: CountryInterface[]) {
    const searchItem: SearchItem = { value };

    const resultMapping: Record<string, string> = {
      name: 'byNameRes',
      capital: 'byCapitalRes',
      subregion: 'byRegionRes',
      alpha: 'byCodeRes',
    };

    const searchKey = resultMapping[route];
    // @ts-ignore: The key will always be valid
    searchItem[searchKey] = res;
    this._searchboxObservable.next(searchItem);
  }

  isValidSearch(value:string): boolean {
    return value.trim()
      .replace(/\s+/g, ' ').length > 0;
  }}
