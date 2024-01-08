import { Component } from '@angular/core';

@Component({
  selector: 'shared-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

  setPlaceholder():string{
    return 'xd'
  }
}
