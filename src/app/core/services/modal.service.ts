import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalHelper } from '../interfaces/modal-helper';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _countryObservable: BehaviorSubject<ModalHelper> =
    new BehaviorSubject<ModalHelper>({ show: false });

  constructor() {}

  get countryObservable() {
    return this._countryObservable.asObservable();
  }

  set setCountryObservable(modalHelper: ModalHelper) {
    this._countryObservable.next(modalHelper);
    console.log(this._countryObservable.getValue());
  }
}
