import { Component, Input } from '@angular/core';
import { Country } from '../../../core/interfaces/country';
import { ModalService } from '../../../core/services/modal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styles: ``,
})
export class CountryTableComponent {
  @Input()
  public _countries: Country[] | undefined = [];

  public data$: Observable<Country>;

  constructor(private modalService: ModalService) {
    this.data$ = modalService.countryObservable;
  }

  showTable(): boolean {
    return this._countries ? this._countries.length > 0 : false;
  }

  showModal(country: Country) {
    this.modalService.setCountryObservable = country;
  }

  protected readonly Node = Node;
}
