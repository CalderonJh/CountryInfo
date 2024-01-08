import {Component, Input} from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent {

  public items = [
    {
      title:'Capital cities',
      link:'by-capital'
    },
    {
      title:'Countries',
      link:'by-country'
    },
    {
      title:'Region',
      link:'by-region'
    },
    {
      title:'Enter an id',
      link:'by/algo'
    }
  ]

  @Input()
  public _placeholder: string = '';

}
