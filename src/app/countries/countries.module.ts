import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ByCapitalComponent } from './components/by-capital-component/by-capital.component';
import { ByCodeComponent } from './components/by-code-component/by-code.component';
import { ByNameComponent } from './components/by-name-component/by-name.component';
import { ByRegionComponent } from './components/by-region-component/by-region.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { ModalBodyComponent } from './components/modal-body/modal-body.component';
import { SearchService } from '../shared/services/search.service';
import { SharedModule } from '../shared/shared.module';
import { CountryNotFoundComponent } from './components/country-not-found/country-not-found.component';
import { CountryTableComponent } from './components/country-table/country-table.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCodeComponent,
    ByNameComponent,
    ByRegionComponent,
    CountryNotFoundComponent,
    CountryTableComponent,
    ModalBodyComponent,
  ],
  exports: [ByCapitalComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    NgOptimizedImage,
  ],
  providers: [SearchService],
})
export class CountriesModule {}
