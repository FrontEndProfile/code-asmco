import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookingComponent } from './pages/booking/booking.component';

export const routes: Routes = [
   {
    path: '',
    component: HomeComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },

  
  // fallback (ALWAYS last)
  {
    path: '**',
    redirectTo: ''
  }
];
