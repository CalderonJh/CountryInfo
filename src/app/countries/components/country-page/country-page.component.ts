import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  constructor(private activatedRoutes: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe((p) => {
      console.table({ p });
    });
  }
}
