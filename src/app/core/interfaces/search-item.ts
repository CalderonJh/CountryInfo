import { Country } from './country';

export interface SearchItem {
  value: string;
  byNameRes?: Country[];
  byCapitalRes?: Country[];
  byRegionRes?: Country[];
  byCodeRes?: Country[];
}
