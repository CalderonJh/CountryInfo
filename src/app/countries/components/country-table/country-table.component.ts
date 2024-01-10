import { Component, Input } from '@angular/core';
import { Country } from '../../../core/interfaces/country';
import { ModalService } from '../../../core/services/modal.service';
import { Observable } from 'rxjs';
import { ModalHelper } from '../../../core/interfaces/modal-helper';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styles: ``,
})
export class CountryTableComponent {
  @Input()
  public _countries: Country[] | undefined = [];

  public modalServiceData$: Observable<ModalHelper>;

  constructor(private modalService: ModalService) {
    this.modalServiceData$ = modalService.countryObservable;
  }

  showTable(): boolean {
    return this._countries ? this._countries.length > 0 : false;
  }

  showModal(country: Country) {
    this.modalService.setCountryObservable = { show: true, country };
  }
}
