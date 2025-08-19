import { Component} from '@angular/core';
import { CopyrightComponent } from '../copyright/copyright.component';
import { RuntxtComponent } from '../runtxt/runtxt.component';
import { SliderComponent } from '../slider/slider.component';
import { MoreproductComponent } from '../moreproduct/moreproduct.component';
// import { DataserviceService } from '../../service/dataservice.service';
declare const AOS: any; // Declare AOS from the global window object

@Component({
  selector: 'app-home',
  imports: [ CopyrightComponent, RuntxtComponent, SliderComponent, MoreproductComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ngAfterViewInit() {
    AOS.init({
      // You can add options here, e.g.
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }
  
}
