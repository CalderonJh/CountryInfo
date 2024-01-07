import {Component, Input} from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent {

  public items = [
    {

    }
  ]

  @Input()
  public _placeholder: string = '';

}
