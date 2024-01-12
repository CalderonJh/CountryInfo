import {
  AfterViewInit,
  Component,
  ElementRef, OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SearchService } from '../../../core/services/search.service';
import { RadioButton } from '../../interfaces/radio-button';
import {debounceTime, Subject, Subscription} from 'rxjs';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css',
})
export class SearchboxComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('tagInput')
  public _input!: ElementRef<HTMLInputElement>;

  @ViewChild('selectBY')
  public selectBy!: ElementRef<HTMLDivElement>;

  private debouncer: Subject<string> = new Subject<string>();

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
      link: 'by-code',
      route: 'alpha',
    },
  ];

  private debouncerSubscription?: Subscription;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.debouncerSubscription =  this.debouncer.pipe(debounceTime(400)).subscribe(() => {
      this.search();
    });
  }

  ngAfterViewInit(): void {
    this._input.nativeElement.focus();
  }

  search() {
    const route = this.selectBy.nativeElement
      .querySelector('.active')
      ?.getAttribute('id');
    if (route && this.isValidSearch())
      this.searchService.search(route, this._input.nativeElement.value);
  }

  isValidSearch(): boolean {
    this._input.nativeElement.value = this._input.nativeElement.value
      .trim()
      .replace(/\s+/g, ' ')
    return this._input.nativeElement.value.length > 0;
  }

  selectText() {
    this._input.nativeElement.select();
  }

  onKeyPress() {
    this.debouncer.next(this._input.nativeElement.value);
  }

  ngOnDestroy(){
    console.log('de suscribe')
    this.debouncerSubscription?.unsubscribe();
  }
}
