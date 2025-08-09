import { Component } from '@angular/core';
import { AboutslidComponent } from '../aboutslid/aboutslid.component';
import { AboutcontactComponent } from '../aboutcontact/aboutcontact.component';

@Component({
  selector: 'app-about',
  imports: [ AboutslidComponent, AboutcontactComponent ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
