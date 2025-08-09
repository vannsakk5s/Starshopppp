import { Component} from '@angular/core';
import { CopyrightComponent } from '../copyright/copyright.component';
import { RuntxtComponent } from '../runtxt/runtxt.component';
import { SliderComponent } from '../slider/slider.component';
import { MoreproductComponent } from '../moreproduct/moreproduct.component';
// import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-home',
  imports: [ CopyrightComponent, RuntxtComponent, SliderComponent, MoreproductComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
