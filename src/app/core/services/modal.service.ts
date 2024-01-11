import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _countryObservable: Subject<Country> = new Subject<Country>();

  constructor() {}

  get countryObservable() {
    return this._countryObservable.asObservable();
  }

  set setCountryObservable(country: Country) {
    this._countryObservable.next(country);
  }
}
