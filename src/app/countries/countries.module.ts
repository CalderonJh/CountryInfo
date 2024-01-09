import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './components/by-capital-component/by-capital.component';
import { ByCountryComponent } from './components/by-country-component/by-country.component';
import { ByRegionComponent } from './components/by-region-component/by-region.component';
import { CountryPageComponent } from './components/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SearchService } from '../shared/services/search.service';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryPageComponent,
  ],
  exports: [ByCapitalComponent],
  imports: [CommonModule, CountriesRoutingModule, SharedModule],
  providers: [SearchService],
})
export class CountriesModule {}
