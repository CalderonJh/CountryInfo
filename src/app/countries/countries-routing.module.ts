import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ByCapitalComponent} from "./components/by-capital-component/by-capital.component";
import {ByCountryComponent} from "./components/by-country-component/by-country.component";
import {ByRegionComponent} from "./components/by-region-component/by-region.component";
import {CountryPageComponent} from "./components/country-page/country-page.component";


const routes:Routes = [
  {
    path: 'by-capital',
    component: ByCapitalComponent
  },
  {
    path: 'by-country',
    component: ByCountryComponent,
  },
  {
    path: 'by-region',
    component: ByRegionComponent,
  },
  {
    path: 'by/:id',
    component: CountryPageComponent
  },
  {
    path: '**',
    redirectTo: 'by-capital'
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CountriesRoutingModule {
}
