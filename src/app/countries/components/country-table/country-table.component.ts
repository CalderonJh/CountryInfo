import { Component, Input } from '@angular/core';
import { CountryInterface } from '../../../core/interfaces/country.interface';
import { ModalService } from '../../../core/services/modal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styles: ``,
})
export class CountryTableComponent {
  @Input()
  public _countries: CountryInterface[] | undefined = [];

  public data$: Observable<CountryInterface>;

  constructor(private modalService: ModalService) {
    this.data$ = modalService.countryObservable;
  }

  showTable(): boolean {
    return this._countries ? this._countries.length > 0 : false;
  }

  showModal(country: CountryInterface) {
    this.modalService.setCountryObservable = country;
  }
}
