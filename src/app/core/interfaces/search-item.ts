import { CountryInterface } from './country.interface';

export interface SearchItem {
  value: string;
  byNameRes?: CountryInterface[];
  byCapitalRes?: CountryInterface[];
  byRegionRes?: CountryInterface[];
  byCodeRes?: CountryInterface[];
}
