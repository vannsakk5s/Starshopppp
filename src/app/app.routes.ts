import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ShowproductComponent } from './components/showproduct/showproduct.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { CarddetailComponent } from './components/carddetail/carddetail.component';
import { LoginComponent } from './components/login/login.component';


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
            { path: 'showproduct', component: ShowproductComponent },
            { path: 'detail', component: DetailComponent},
            { path: 'carddetail', component: CarddetailComponent },
        ], 
    },
    {
        path: 'login',
        component: LoginComponent,
    }

    
];
