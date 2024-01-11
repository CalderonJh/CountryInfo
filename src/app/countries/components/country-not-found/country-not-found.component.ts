import { Component, Input } from '@angular/core';

@Component({
  selector: 'countries-not-found',
  templateUrl: './country-not-found.component.html',
  styleUrl: './country-not-found.component.css',
})
export class CountryNotFoundComponent {
  @Input()
  public _title: string = 'Look for a country';
}
