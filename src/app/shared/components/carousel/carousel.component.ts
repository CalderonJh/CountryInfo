import { Component } from '@angular/core';

@Component({
  selector: 'countries-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  // carusel img URLs
  public imgagesURL:string[] = [
    'https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://media.letstrip.co/wp-content/uploads/2023/01/06193817/guatape-medellin-colombia-1200x610.jpg',
    'https://autolab.com.co/wp-content/uploads/2020/08/Foto-Post-112.png'
  ]

}
