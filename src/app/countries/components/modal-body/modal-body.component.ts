import { Component, Input } from '@angular/core';
import { CountryInterface } from '../../../core/interfaces/country.interface';
import { toString } from '../../helpers/modal-helper';
import { InfoItem } from '../../interfaces/info-item';

@Component({
  selector: 'countries-modal',
  templateUrl: './modal-body.component.html',
  styles: '',
})
export class ModalBodyComponent {
  @Input()
  public country!: CountryInterface;

  infoItems(): InfoItem[] {
    if (!this.country) return [];
    else
      return [
        {
          key: 'Official name:',
          _value: this.country.name.official,
        },
        {
          key: 'Common name:',
          _value: this.country.name.common,
        },
        {
          key: 'Native names:',
          _value: toString(this.country.name.nativeName),
        },
        {
          key: 'Codes:',
          _value: `${this.country.cca2} ${this.country.cca3} ${this.country.ccn3}`,
        },
        {
          key: 'Capital:',
          _value: toString(this.country.capital),
        },
        {
          key: 'Region:',
          _value: this.country.region,
        },
        {
          key: 'Subregion:',
          _value: this.country.subregion,
        },
        {
          key: 'Currencies:',
          _value: toString(this.country.currencies, ['symbol']),
        },
        {
          key: 'Language:',
          _value: toString(this.country.languages),
        },
        {
          key: 'Independent:',
          _value: this.country.independent ? 'Yes ✅' : 'No ❌',
        },
        {
          key: 'Area:',
          _value: toString(this.country.area).concat(' km²'),
        },
        {
          key: 'Borders:',
          _value: toString(this.country.borders),
        },
        {
          key: 'Population:',
          _value: toString(this.country.population),
        },
        {
          key: 'Demonyms:',
          _value: toString(this.country.demonyms),
        },
        {
          key: 'Land-locked:',
          _value: this.country.landlocked ? 'Yes 🌊❌' : 'No 🌊✅',
        },
        {
          key: 'Start of week:',
          _value:
            this.country.startOfWeek.charAt(0).toUpperCase() +
            this.country.startOfWeek.slice(1),
        },
      ];
  }
}
