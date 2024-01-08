import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public sidebarItems = [
    {
      title: 'Home',
      link:'',
      exact: true
    },
    {
      title: 'Search',
      link: 'search',
      exact: false
    },
    {
      title: 'About',
      link:'about',
      exact: true
    },
    {
      title: 'Contact',
      link:'contact',
      exact: true
    }
  ]

}
