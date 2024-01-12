import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CountryInterface } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _countryObservable: Subject<CountryInterface> = new Subject<CountryInterface>();

  constructor() {}

  get countryObservable() {
    return this._countryObservable.asObservable();
  }

  set setCountryObservable(country: CountryInterface) {
    this._countryObservable.next(country);
  }
}
