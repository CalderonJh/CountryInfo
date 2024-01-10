import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from '../interfaces/search-item';
import { Country } from '../interfaces/country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // TODO: al cambiar de ruta, si el search value es válido (y/o ha cambiado) realizar búsqueda automáticamente
  // crear distintos res??

  constructor(private http: HttpClient) {}

  private baseURL: string = 'https://restcountries.com/v3.1';

  private _searchboxObservable: BehaviorSubject<SearchItem> =
    new BehaviorSubject<SearchItem>({ value: 'default' });

  search(route: string, value: string) {
    return this.http
      .get<Country[]>(`${this.baseURL}/${route}/${value}`)
      .subscribe((res) => this.handleSearchResult(route, value, res));
  }

  get searchboxObservable() {
    return this._searchboxObservable.asObservable();
  }

  handleSearchResult(route: string, value: string, res: Country[]) {
    const searchItem: SearchItem = { value };

    const resultMapping: Record<string, string> = {
      name: 'byNameRes',
      capital: 'byCapitalRes',
      region: 'byRegionRes',
      alpha: 'byCodeRes',
    };

    const searchKey = resultMapping[route];
    // @ts-ignore: The key will always be valid
    searchItem[searchKey] = res;
    this._searchboxObservable.next(searchItem);
  }
}
