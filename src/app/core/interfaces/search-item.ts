import { Country } from './country';

export interface SearchItem {
  value: string;
  res?: Country[];
}
