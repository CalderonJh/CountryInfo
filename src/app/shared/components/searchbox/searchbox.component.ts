import { Component, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css',
})
export class SearchboxComponent {
  @ViewChild('tagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  public items = [
    {
      title: 'Capital cities',
      link: 'by-capital',
    },
    {
      title: 'Countries',
      link: 'by-country',
    },
    {
      title: 'Region',
      link: 'by-region',
    },
    {
      title: 'Enter an id',
      link: 'by/algo',
    },
  ];

  constructor(public searchService: SearchService) {}

  search() {
    this.searchService.searchObservableValue = {
      value: this.tagInput.nativeElement.value,
    };
  }
}
