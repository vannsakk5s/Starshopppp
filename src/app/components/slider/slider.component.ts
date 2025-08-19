import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare const AOS: any; // Declare AOS from the global window object

@Component({
  selector: 'app-slider',
  imports: [ RouterLink ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  ngAfterViewInit() {
    AOS.init({
      // You can add options here, e.g.
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }

}
