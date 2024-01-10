import { Component, Input } from '@angular/core';
import { Country } from '../../../core/interfaces/country';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styles: `a{color:rgb(2, 129, 2);}`,
})
export class CountryTableComponent {
  @Input()
  public _countries: Country[] | undefined = [];

  showTable(): boolean {
    return this._countries ? this._countries.length > 0 : false;
  }
}
