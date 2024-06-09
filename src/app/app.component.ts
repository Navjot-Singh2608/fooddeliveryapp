import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RestaurantListingComponent } from './restaurant-listing/components/restaurant-listing.component';
import { HeaderComponent } from './header/components/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RestaurantListingComponent, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fooddeliveryapp';
}
