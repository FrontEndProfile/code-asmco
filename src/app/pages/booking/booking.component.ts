import { Component } from '@angular/core';
import { LetsConnectComponent } from '../../components/lets-connect/lets-connect.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [LetsConnectComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {

}
