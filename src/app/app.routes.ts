import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { FavoritComponent } from './components/favorit/favorit.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { CarddetailComponent } from './components/carddetail/carddetail.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: NavbarComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'favorit', component: FavoritComponent },
            { path: 'detail', component: DetailComponent},
            { path: 'carddetail', component: CarddetailComponent }
        ], 
    },
];
