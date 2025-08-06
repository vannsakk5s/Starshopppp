import { Component,  } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink, RouterLinkActive, RouterOutlet, NgClass, ProfileComponent ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  phbar() {
    this.isNavbarOpen = false; // close menu after clicking a link
  }
  logo: string = 'brand style.png';

}
