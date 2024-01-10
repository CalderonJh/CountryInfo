import { Component } from '@angular/core';

@Component({
  selector: 'countries-carousel',
  templateUrl: './carousel.component.html',
  styles: '',
})
export class CarouselComponent {
  // carousel img URLs
  public images: string[] = [
    'https://media.letstrip.co/wp-content/uploads/2023/01/06193817/guatape-medellin-colombia-1200x610.jpg',
    'https://www.nationalgeographic.com/content/dam/expeditions/destinations/africa/hero-africa-elephants.jpg.adapt.six-sixty-seven.jpg',
    'https://autolab.com.co/wp-content/uploads/2020/08/Foto-Post-112.png',
  ];
}
