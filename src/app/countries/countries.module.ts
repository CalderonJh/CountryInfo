import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './components/by-capital-component/by-capital.component';
import { ByNameComponent } from './components/by-name-component/by-name.component';
import { ByRegionComponent } from './components/by-region-component/by-region.component';
import { CountryPageComponent } from './components/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SearchService } from '../shared/services/search.service';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryNotFoundComponent } from './components/country-not-found/country-not-found.component';
import { ByCodeComponent } from './components/by-code/by-code.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
    CountryPageComponent,
    CountryTableComponent,
    CountryNotFoundComponent,
    ByCodeComponent,
  ],
  exports: [ByCapitalComponent],
  imports: [CommonModule, CountriesRoutingModule, SharedModule],
  providers: [SearchService],
})
export class CountriesModule {}
