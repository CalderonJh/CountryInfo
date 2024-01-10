import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from './components/by-capital-component/by-capital.component';
import { ByNameComponent } from './components/by-name-component/by-name.component';
import { ByRegionComponent } from './components/by-region-component/by-region.component';
import { ByCodeComponent } from './components/by-code/by-code.component';
import { CountryPageComponent } from './components/country-page/country-page.component';

const routes: Routes = [
  {
    path: 'by-name',
    component: ByNameComponent,
  },
  {
    path: 'by-capital',
    component: ByCapitalComponent,
  },
  {
    path: 'by-region',
    component: ByRegionComponent,
  },
  {
    path: 'by-code',
    component: ByCodeComponent,
  },
  {
    path: 'by/:id',
    component: CountryPageComponent,
  },
  {
    path: '**',
    redirectTo: 'by-name',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
