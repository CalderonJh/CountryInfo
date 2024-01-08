import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import {AboutPageComponent} from "./shared/pages/about-page/about-page.component";
import {ContactPageComponent} from "./shared/pages/contact-page/contact-page.component";
import {NotFoundPageComponent} from "./shared/pages/not-found/not-found-page.component";
import { SearchPageComponent } from './shared/pages/search-page/search-page.component';


const routes: Routes = [
  {
  path:'',
  component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path:'contact',
    component: ContactPageComponent
  },
  {
    path: 'search',
    component: SearchPageComponent,
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path:'not-found',
    component: NotFoundPageComponent
  },
  {
    path: 'home',
    redirectTo:''
  },
  {
    path: '**',
    redirectTo: 'not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
