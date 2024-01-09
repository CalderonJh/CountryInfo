import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css',
})
export class SearchboxComponent implements AfterViewInit {
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

  constructor(private searchService: SearchService) {}

  ngAfterViewInit(): void {
    this.tagInput.nativeElement.focus();
  }

  search() {
    this.searchService.searchByCapital(this.tagInput.nativeElement.value);
  }
}
