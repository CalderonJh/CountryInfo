import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {
  constructor(private router:Router){};

  showCaruousel(): boolean {
    const routes = ['/', 'home']
    console.log(this.router.url);
    
    return routes.includes(this.router.url);
  }

}
