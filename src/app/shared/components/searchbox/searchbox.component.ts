import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';
import { RadioButton } from '../../interfaces/radio-button';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css',
})
export class SearchboxComponent implements AfterViewInit {
  @ViewChild('tagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  @ViewChild('selectBY')
  public selectBy!: ElementRef<HTMLDivElement>;

  public items: RadioButton[] = [
    {
      title: 'Name',
      link: 'by-name',
      route: 'name',
    },
    {
      title: 'Capital city',
      link: 'by-capital',
      route: 'capital',
    },
    {
      title: 'Region',
      link: 'by-region',
      route: 'subregion',
    },
    {
      title: 'Code',
      link: 'by/algo',
      route: 'alpha',
    },
  ];

  constructor(private searchService: SearchService) {}

  ngAfterViewInit(): void {
    this.tagInput.nativeElement.focus();
  }

  search() {
    const route = this.selectBy.nativeElement
      .querySelector('.active')
      ?.getAttribute('id');
    if (route && this.isValidSearch())
      this.searchService.search(route, this.tagInput.nativeElement.value);
  }

  isValidSearch(): boolean {
    const value = this.tagInput.nativeElement.value
      .trim()
      .replace(/\s+/g, ' ')
      .toLocaleLowerCase('en-US');
    return value.length > 0;
  }
}
