import { Component } from '@angular/core';
import { AboutslidComponent } from '../aboutslid/aboutslid.component';
import { AboutcontactComponent } from '../aboutcontact/aboutcontact.component';
declare const AOS: any; // Declare AOS from the global window object

@Component({
  selector: 'app-about',
  imports: [ AboutslidComponent, AboutcontactComponent ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  ngAfterViewInit() {
    AOS.init({
      // You can add options here, e.g.
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }

}
